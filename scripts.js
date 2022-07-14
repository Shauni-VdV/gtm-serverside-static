function test() {
  dataLayer = window.dataLayer || [];
  dataLayer.push({
    event: 'test event',
    event_details1: 'test button'
  })
}

function sendEvent(){
  dataLayer = window.dataLayer || [];
  dataLayer.push({
    event: 'button click',
    button_name: 'sendEvent',
    page_title: document.title
  });
}