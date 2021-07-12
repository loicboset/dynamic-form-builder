export const getInputDetails = (inputType) => {
  switch (inputType) {
    case 'short-text':
      return {
        type: 'short-text',
        name: 'Dummy short text title',
        placeholder: 'Dummy placeholder',
        maxLength: 150,
        required: true,
        private: false,
        value: '',
      };
    case 'long-text':
      return {
        type: 'long-text',
        name: 'Dummy long text title',
        placeholder: 'Dummy placeholder',
        maxLength: 350,
        required: false,
        private: false,
        value: '',
      };
    case 'checkbox':
      return {
        type: 'checkbox',
        name: 'Do you accept something?',
        required: false,
        private: false,
        value: false,
      };
    case 'checkboxes':
      return {
        type: 'checkboxes',
        name: 'Dummy checkboxes title',
        options: [
          { id: 1, name: 'quattro formaggi' },
          { id: 2, name: 'prosciutto' },
          { id: 3, name: 'hawai' },
        ],
        required: false,
        private: false,
        value: [],
      };
    case 'radio':
      return {
        type: 'radio',
        name: 'Dummy radio title',
        options: [
          { id: 1, name: 'hello' },
          { id: 2, name: 'world' },
          { id: 3, name: 'foo bar' },
        ],
        required: false,
        private: false,
        value: '',
      };
    case 'dropdown':
      return {
        type: 'dropdown',
        name: 'Dummy dropdown title',
        options: [
          { id: 1, name: 'quattro formaggi' },
          { id: 2, name: 'prosciutto' },
          { id: 3, name: 'hawai' },
        ],
        required: false,
        private: false,
        value: '',
      };
    case 'image':
      return {
        type: 'image',
        name: 'Dummy image title',
        required: false,
        private: false,
        value: '',
      };
    case 'file':
      return {
        type: 'file',
        name: 'Dummy file title',
        required: false,
        private: false,
        value: '',
      };
    case 'map':
      return {
        type: 'map',
        name: 'Dummy map title',
        lat: 51.19233320049281,
        lng: 2.8249530184213145,
        required: false,
        private: false,
        value: { lat: '', lng: '' },
      };
    default:
      break;
  }
};
