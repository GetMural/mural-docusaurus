const React = require("react");

function MailChimpForm() {
  return (
    <div id="mc_embed_signup">
      <span className="heading">Mural Newsletter</span>
      <form
        action="https://getmural.us18.list-manage.com/subscribe/post?u=adbd68029738fc9b06e630bed&amp;id=c2a3e8ca4c"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">Email Address</label>
            <input
              type="email"
              defaultValue=""
              placeholder="your@email.com"
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
            />
          </div>
          <div id="mce-responses" className="clear">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: "none" }}
            ></div>
            <div
              className="response"
              id="mce-success-response"
              style={{ display: "none" }}
            ></div>
          </div>
          {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_adbd68029738fc9b06e630bed_c2a3e8ca4c"
              tabIndex="-1"
              defaultValue=""
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              defaultValue="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
      <script
        type="text/javascript"
        src="https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      />
      <script type="text/javascript" src="/js/mailchimp.js" />
    </div>
  );
}

module.exports = MailChimpForm;
