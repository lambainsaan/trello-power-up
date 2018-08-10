TrelloPowerUp.initialize({
  'card-buttons': function (t, options) {
    return [{
      icon: 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717',
      text: 'Estimate Size',
      callback: function (t) {
        return t.popup({
          title: "Estimation",
          url: 'estimate.html',
        });
      }
    }];
  },
  'card-badges': function (t, options) {
    return t.get('card', 'shared', 'estimate')
    .then(function (estimate) {
      return [{
        icon: 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717',
        text: estimate
      }];
    });
  },
});
