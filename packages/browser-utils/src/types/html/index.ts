/**
 * Valid input types according to the HTML specification.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types}
 */
export const InputType = {
  button: 'button',
  checkbox: 'checkbox',
  color: 'color',
  date: 'date',
  datetimeLocal: 'datetime-local',
  email: 'email',
  file: 'file',
  hidden: 'hidden',
  image: 'image',
  month: 'month',
  number: 'number',
  password: 'password',
  radio: 'radio',
  range: 'range',
  reset: 'reset',
  search: 'search',
  submit: 'submit',
  tel: 'tel',
  text: 'text',
  time: 'time',
  url: 'url',
  week: 'week',
} as const;
/**
 * Valid input types according to the HTML specification.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types}
 */
export type InputType = (typeof InputType)[keyof typeof InputType];
