/**
 * @license Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */
CKEDITOR.stylesSet.add('dsg_styles',
    [
        { name: 'H1', element: 'h1' },
        { name: 'H2', element: 'h2' },
        { name: 'H3', element: 'h3' },
        { name: 'H4', element: 'h4' },
        { name: 'FeatureText', element: 'span', attributes: {'class': 'feature'}},
        { name: 'FeatureLink', element: 'a', attributes: {'class': 'feature-link'}},
        { name: 'SectionCallout', element: 'span', attributes: {'class': 'section-callout'}},
        { name: 'UnderlineBlock', element: 'span', attributes: {'class': 'underline-block'}},
        { name: 'paragraph', element: 'p' }
    ]);


CKEDITOR.editorConfig = function (config) {
    config.skin = "moono-lisa";
    config.extraPlugins = 'justify,sourcedialog,iframe,font,colorbutton,panelbutton,tableresize';
    config.stylesSet = 'dsg_styles';
    //config.toolbar = [
    //    { name: 'left', items: ['Bold', 'Italic', 'Link','BulletedList'] },
    //    { name: 'right', items: ['RemoveFormat', 'Source']}
    //];
    //CKEDITOR.config.allowedContent = true;
    //CKEDITOR.config.extraAllowedContent = 'div(*){*}[*]';
    CKEDITOR.config.extraAllowedContent = 'div(*){*}[*];iframe(*){*}[*]';
    //CKEDITOR.config.extraAllowedContent = 'div(col-md-*,container-fluid,row,test)';
    config.toolbar_More = [
        { name: 'right', items: ['Styles', 'FontSize','TextColor', 'Bold', 'Italic', 'Subscript', 'Superscript', 'Link', 'h1', 'h2', 'h3', 'NumberedList', 'BulletedList', 'Indent', 'Outdent', 'Blockquote', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'RemoveFormat', 'Sourcedialog', 'Table', "Iframe", "Image"] },
    ];
    config.toolbar = [
      { name: 'right', items: ['Styles', 'FontSize', 'TextColor', 'Bold', 'Italic', 'Subscript', 'Superscript', 'Link', 'h1', 'h2', 'h3', 'NumberedList', 'BulletedList', 'Indent', 'Outdent', 'Blockquote', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'RemoveFormat', 'Sourcedialog', 'Table', "Iframe", "Image"] },

    ];

    config.toolbar_Title = [
     { name: 'left', items: ['RemoveFormat'] }
    ];

    config.toolbar_Conversation = [
        {
            name: 'right',
            items: ['TextColor', 'Bold', 'Italic', 'Subscript', 'Superscript', 'Link', 'h1', 'h2', 'h3', 'NumberedList', 'BulletedList', 'Indent', 'Outdent', 'Blockquote', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'RemoveFormat', 'Sourcedialog', "Image"]
        }
    ];

    config.removePlugins = "elementspath,magicline";

    config.resize_enabled = false;
    config.height = 128;

	// Remove some buttons, provided by the standard plugins, which we don't
	// need to have in the Standard(s) toolbar.
	//config.removeButtons = 'Underline,Subscript,Superscript';
};


