const PubSub = {
  publish: function(channel, payload){
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },
  subscribe: function(channel, callback) {
    document.addEventListener(channel, callback);
    //channel takes place of click, submit etc here
  }
};

module.exports = PubSub;
