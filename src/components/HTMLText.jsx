
import { getHTML } from '../api/accounts.api';
import { useState, useEffect } from 'react';

export function GetHTMLText(filename) {
  const [HTMLContent, setHTMLContent] = useState('');

  useEffect(() => {
    getHTML(`${filename}.html`).then((content) => {
      setHTMLContent(content);
    });
  }, [filename]);

  return HTMLContent;
}


