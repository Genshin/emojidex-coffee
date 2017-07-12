describe("emojidexPalette:User:Login", function() {
  beforeAll(function(done) {
    clearStorage().then(() => {
      helperBefore();
      let limitForSpec = 1;
      $("#palette-btn").emojidexPalette({
        paletteEmojisLimit: limitForSpec,
        onComplete: () => {
          $("#palette-input").emojidexPalette({
            paletteEmojisLimit: limitForSpec,
            onComplete: () => { done(); }
          });
        }
      });
    });
  });

  afterAll(() => {
    closePalette();
    helperAfter();
  });

  describe('user tab', function() {
    it('login (Failure)', function(done) {
      $('#tab-content-user').watch({
        id: 'content_user',
        properties: 'prop_innerHTML',
        watchChildren: true,
        callback(data, i) {
          if (data.vals[0].match(/login-error/)) {
            // TODO: english text
            expect($('#login-error span').text()).toBe('Login failed. Please check your username and password or login here.');
            removeWatch($('#tab-content-user'), 'content_user');
            done();
          }
        }
      });

      $('.ui-dialog').watch({
        id: 'dialog',
        properties: 'display',
        callback() {
          removeWatch($('.ui-dialog'), 'dialog');

          $('#tab-user a').click();
          $('#palette-emoji-username-input').val('aaa');
          $('#palette-emoji-password-input').val('aaa');
          $('#palette-emoji-login-submit').click();
        }
      });
      $('.emojidex-palette-button')[0].click();
    });

    it('premium user login [Requires a premium user account]', function(done) {
      if (typeof user_info === 'undefined' || user_info === null) { pending(); }
      $('#tab-content-user').watch({
        id: 'content_user',
        properties: 'prop_innerHTML',
        watchChildren: true,
        callback(data, i) {
          if (data.vals[0].match(/favorite-emoji-list/)) {
            $('#tab-user-favorite a').click();
            expect($('#tab-content-user-favorite').find('img').length).toBeTruthy();
            removeWatch($('#tab-content-user'), 'content_user');
            done();
          }
        }
      });

      $('#tab-user a').click();
      $('#palette-emoji-username-input').val(user_info.auth_user);
      $('#palette-emoji-password-input').val(user_info.password);
      $('#palette-emoji-login-submit').click();
    });

   // it 'premium user can see the newest/popular emoji', (done) ->
   //   pending() unless premium_user_info?
   //   timer_option =
   //     callback: ->
   //       if $('#tab-content-user-newest').length
   //         $('#tab-user-newest a').click()
   //         expect($('#tab-content-user-newest').find('img').length).toBeTruthy()
   //         done()
   //       else
   //         spec_timer timer_option
   //   spec_timer timer_option

    it('logout', function(done) {
      if (typeof premium_user_info === 'undefined' || premium_user_info === null) { pending(); }
      $('#tab-content-user').watch({
        id: 'content_user',
        properties: 'prop_innerHTML',
        watchChildren: true,
        callback(data, i) {
          expect($('#palette-emoji-username-input')).toHaveCss({display: 'block'});
          removeWatch($('#tab-content-user'), 'content_user');
          done();
        }
      });
      $('#palette-emoji-logout').click();
    });

    it('general user login [Require user info]', function(done) {
      if (typeof user_info === 'undefined' || user_info === null) { pending(); }
      $('#tab-content-user').watch({
        id: 'content_user',
        properties: 'prop_innerHTML',
        watchChildren: true,
        callback(data, i) {
          if (data.vals[0].match(/favorite-emoji-list/)) {
            expect($('#tab-content-user-favorite').find('img').length).toBeTruthy();
            removeWatch($('#tab-content-user'), 'content_user');
            done();
          }
        }
      });
      $('#tab-user a').click();
      $('#palette-emoji-username-input').val(user_info.auth_user);
      $('#palette-emoji-password-input').val(user_info.password);
      $('#palette-emoji-login-submit').click();
    });
  });

   // it 'general user can not see the newest/popular emoji', (done) ->
   //   pending() unless user_info?
   //   timer_option =
   //     callback: ->
   //       if $('#tab-content-user-newest').length
   //         $('#tab-user-newest a').click()
   //         expect($('#tab-content-user-newest').find('a').text()).toBe 'Premium/Pro user only.'
   //         done()
   //       else
   //         spec_timer timer_option
   //   spec_timer timer_option

  it('login with storage data', function(done) {
    if (typeof user_info === 'undefined' || user_info === null) { pending(); }
    $('#palette-btn').removeData().unbind();
    $('#emojidex-emoji-palette, .emojidex-palette-div').remove();

    $("#palette-btn").emojidexPalette({
      onComplete: () => {
        spec_timer({
          time: 1000,
          callback: () => {
            $('.ui-dialog').watch({
              id: 'dialog_2',
              properties: 'display',
              callback() {
                removeWatch($('.ui-dialog'), 'dialog_2');

                $('#tab-content-user').watch({
                  id: 'content_user',
                  properties: 'prop_innerHTML',
                  watchChildren: true,
                  callback(data, i) {
                    if (data.vals[0].match(/favorite-emoji-list/)) {
                      expect($('#tab-content-user-favorite').find('img').length).toBeTruthy();
                      $('button.pull-right[aria-label="Close"]').click();
                      removeWatch($('#tab-content-user'), 'content_user');
                      return done();
                    }
                  }
                });
                $('#tab-user a').click();
              }
            });
            $("#palette-btn").click();
          }
        })
      }
    });
  });
});