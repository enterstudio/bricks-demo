/**
 * Created by Administrator on 2014/7/10.
 */
export default
Ember.Controller.extend({

    myModalButtons: [
        Ember.Object.create({title: 'Submit', clicked: "submit"}),
        Ember.Object.create({title: 'Cancel', clicked: "cancel", dismiss: 'modal'})
    ],
    manualButtons: [
        Ember.Object.create({title: 'Submit', clicked: "submitManual"}),
        Ember.Object.create({title: 'Cancel', dismiss: 'modal'})
    ],
    actions: {
        confirm:function(){
            Bootstrap.ModalManager.confirm(this);
        },
        modalConfirmed: function () {
            Bootstrap.NM.push('Confirmed!', 'success');
        },
        modalCanceled: function () {
            Bootstrap.NM.push('Cancelled!', 'info');
        },

        //Submit the modal
        submit: function () {
            Bootstrap.NM.push('Successfully submitted modal', 'success');
            return Bootstrap.ModalManager.hide('myModal');
        },


        //Cancel the modal, we don't need to hide the model manually because we set {..., dismiss: 'modal'} on the button meta data
        cancel: function () {
            return Bootstrap.NM.push('Modal was cancelled', 'info');
        },


        //Show the modal
        show: function () {
            return Bootstrap.ModalManager.show('myModal');
        },

        submitManual: function () {
            Bootstrap.NM.push('Modal destroyed!', 'success');
            return Bootstrap.ModalManager.close('manualModal');
        },

        createModalProgramatically: function () {
            //@property {string} The name of the modal, required later to close the modal (see submitManual function above)
            //@property {string} The title of the modal.
            //@property {string} The template name to render within the modal body, a View class may also be specified.
            //@property {array} Array of Button meta data
            //@property {object} The controller instance that instantiate the modal.
            Bootstrap.ModalManager.open('manualModal', 'Hello', 'form/hello', this.manualButtons, this);
        }
    }
})