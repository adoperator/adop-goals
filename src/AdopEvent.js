export default class AdopEvent {
  constructor(params) {
    this.campaignId = params.campaignId || null;
    this.name = params.name || null;
    this.value = params.value || null;
    this.count = params.count || null;
    this.clickid = params.clickid || null;

    this.init();
  }

  init() {
    var img = document.createElement("img");
    // img.style.width = "170px";
    // img.style.height = "170px";
    // img.style.backgroundColor = "green";
    var params = {
      campaign_id: this.campaignId,
      name: this.name,
      value: this.value,
      count: this.count,
      clickid: this.clickid
    };

    var esc = encodeURIComponent;
    var query = Object.keys(params)
      .map(k => esc(k) + "=" + esc(params[k]))
      .join("&");

    img.src = "https://newService?" + query;

    document.body.append(img);
  }
}
