import React from 'react';

import TextArea from '@components/UI/TextArea';
import Button from '@components/UI/Button';

import styles from './NewPostForm.module.scss';

const NewPostForm = () => {
  const buttonClickHandler = () => {
    console.log('click');
  };

  return (
    <div className={ styles.container }>
      <TextArea />
      <Button onClick={buttonClickHandler}>Add post</Button>
    </div>
  );
};

export default NewPostForm;
