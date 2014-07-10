export default Ember.View.extend({
    _parseRichTextOptions: function () {
        this.set('optionsR1', {
            toolbar: [
                'source | undo redo | bold italic underline strikethrough | superscript subscript | forecolor backcolor | removeformat |',
                'insertorderedlist insertunorderedlist | selectall cleardoc paragraph | fontfamily fontsize' ,
                '| justifyleft justifycenter justifyright justifyjustify |',
                'link unlink | emotion image video  | map',
                '| horizontal print preview fullscreen', 'drafts', 'formula'
            ]
        });
        this.set('optionsR2', {});
    },
    init: function () {
        this._super.apply(this, arguments);
        this._parseRichTextOptions();
    }


});