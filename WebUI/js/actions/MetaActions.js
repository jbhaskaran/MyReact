import AppDispatcher from '../dispatcher/AppDispatcher';
import MetaConstants from '../constants/MetaConstants';

let MetaActions = {
    /**
   * @param  {string} text
   */
  create: function(text) {
    AppDispatcher.dispatch({
      actionType: MetaConstants.META_CREATE,
      text: text
    });
  },
    /**
   * @param  {string} id The ID of the ToDo item
   * @param  {string} text
   */
  updateText: function(id, text) {
    AppDispatcher.dispatch({
      actionType: MetaConstants.META_UPDATE_TEXT,
      id: id,
      text: text
    });
  },

}

export default MetaActions;