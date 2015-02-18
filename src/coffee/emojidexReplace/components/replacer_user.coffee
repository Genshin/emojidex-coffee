class ReplacerUser extends Replacer
  constructor: (@plugin) ->
    super

  loadEmoji: ->
    @getUserEmojiData @plugin.options.userNames, @onLoadEmojiData

  getUserEmojiData: (user_names, callback) ->
    loaded_num = 0
    names = user_names
    emoji_data = []

    for name in names
      $.ajax
        url: "https://www.emojidex.com/api/v1/users/" + name + "/emoji"
        dataType: "json"
        type: "get"

        success: (user_emoji_json, status, xhr) ->
          emoji_data = emoji_data.concat user_emoji_json.emoji
          if ++loaded_num is names.length
            callback emoji_data

        error: (data) ->
          console.log "error: load json"
          console.log data

  onLoadEmojiData: (emoji_data) =>
    @emoji_data = emoji_data
    @emoji_regexps = @getEmojiRegexps emoji_data

    @plugin.element.find(":not(iframe,textarea,script)").andSelf().contents().filter (index, element) =>
      $(element).replaceWith @getTextWithEomojiTag element.textContent if element.nodeType is Node.TEXT_NODE

  getEmojiRegexps: (emoji_data) ->
    pattern_utf = ""
    pattern_code = ":("
    for emoji in emoji_data
      pattern_utf += emoji.moji + "|" if emoji.moji?
      pattern_code += @replaceSpaceToUnder(emoji.code) + "|" if emoji.code?

    utf: RegExp(pattern_utf.slice(0, -1), 'g')
    code: RegExp(pattern_code.slice(0, -1) + "):", 'g')

  getTextWithEomojiTag: (text) ->
    text = text.replace @emoji_regexps.utf, (matched_string) =>
      for emoji in @emoji_data
        if emoji.moji is matched_string
          return @getEmojiTag @replaceSpaceToUnder emoji.code

    text = text.replace @emoji_regexps.code, (matched_string, pattern1) =>
      for emoji in @emoji_data
        if @replaceSpaceToUnder(emoji.code) is pattern1
          return @getEmojiTag pattern1

