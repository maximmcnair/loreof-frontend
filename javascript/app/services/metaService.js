angular.module('loreof.services')
  .factory('$metaService', function(){
    // Set default meta fields
    var metaData =
      { pageTitle: 'Lore Of'
      , twitterTitle: 'twitterTitle'
      , twitterDescription: 'twitterDescription'
      , twitterImage: 'twitterImage'
      }

    return {
      getMeta: function(property) {
        console.log(property, metaData[property])
        return metaData[property]
      }
    , setMeta: function(property, newValue) {
        metaData[property] = newValue
      }
    }
  })