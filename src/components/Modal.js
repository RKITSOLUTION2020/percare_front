import React from 'react';
import { Dialog } from 'primereact/dialog';

const Modal = ({ isOpen, setISOpen, title, children, background, icon }) => {
  return (
    <div>
      <Dialog
        visible={isOpen}
        onHide={() => setISOpen(false)}
        breakpoints={{ '960px': '75vw', '640px': '100vw' }}
        header={title}
        headerClassName='text-Black text-2xl font-bold h-max  px-3 py-3'
        className={background ? background : 'bg-white'}
      >
        {children}
      </Dialog>
    </div>
  );
};

export default Modal;
