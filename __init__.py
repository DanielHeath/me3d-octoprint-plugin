# coding=utf-8
from __future__ import absolute_import

import octoprint.plugin

class Me3DUiPlugin(octoprint.plugin.UiPlugin,
                   octoprint.plugin.TemplatePlugin,
                   octoprint.plugin.AssetPlugin):

    def will_handle_ui(self, request):
        # returns True if the User Agent sent by the client matches one of
        # the User Agent strings known for any of the platforms android, ipad
        # or iphone
        return request.user_agent

    def get_assets(self):
        return dict(js=['js/jquery-3.1.1.js', 'js/custom.js'],
                    css=['css/styles.css'],
                    less=[],
                    img=['img/Tools.svg', 'img/Logo.svg', 'img/dot.svg']
                    )

    def on_ui_render(self, now, request, render_kwargs):
        # if will_handle_ui returned True, we will now render our custom index
        # template, using the render_kwargs as provided by OctoPrint
        from flask import make_response, render_template
        return make_response(render_template("Me3D_ui_index.jinja2",
                                             **render_kwargs))


__plugin_name__ = "Me3D UI"
__plugin_implementation__ = Me3DUiPlugin()
