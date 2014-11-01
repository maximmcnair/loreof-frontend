angular.module('loreof.services')
  .factory('$mediaService', [function () {
    var service = {}
    service.isYoutube = function (href) {
      if(href){
        return href.indexOf('youtube.com') > -1
      }
    }
    service.isVimeo = function (href) {
      if(href){
        return href.indexOf('vimeo.com') > -1
      }
    }
    service.getYoutubeId = function (href) {
      var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
      var match = href.match(regExp)
      if (match && match[2].length == 11){
        return match[2]
      }
    }
    service.getVimeoId = function (href) {
      var regExp = /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/
      var match = href.match(regExp)
      if (match && match[3]){
        return match[3]
      }
    }
    service.parseYoutubeThumbs = function (id) {
      var thumbs =
        { 'default': 'http://img.youtube.com/vi/' + id + '/default.jpg'
        , 'hqdefault': 'http://img.youtube.com/vi/' + id + '/hqdefault.jpg'
        , 'mqdefault': 'http://img.youtube.com/vi/' + id + '/mqdefault.jpg'
        , 'sddefault': 'http://img.youtube.com/vi/' + id + '/sddefault.jpg'
        , 'maxresdefault': 'http://img.youtube.com/vi/' + id + '/maxresdefault.jpg'
        }
      return thumbs
    }
    service.getThumbnail = function(href) {
      if(service.isYoutube(href)){
        var id = service.getYoutubeId(href)
        return service.parseYoutubeThumbs(id)
      }
    }

    return service
  }])
