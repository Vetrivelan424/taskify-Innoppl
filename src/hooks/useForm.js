import React,{ useState } from 'react';

export default function useForm(initial = {}) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (rules = {}) => {
    const next = {};
    Object.keys(rules).forEach((key) => {
      const val = (values[key] ?? '').toString().trim();
      const rule = rules[key];
      if (rule?.required && !val) next[key] = 'This field is required';
      if (rule?.pattern && val && !rule.pattern.test(val)) next[key] = rule.message || 'Invalid value';
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const reset = (next = initial) => setValues(next);

  return { values, errors, onChange, validate, reset, setValues, setErrors };
}