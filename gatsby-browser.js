/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

require("prismjs/themes/prism-coy.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
exports.onServiceWorkerUpdateReady = () => window.location.reload(true);
