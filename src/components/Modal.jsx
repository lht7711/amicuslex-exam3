
function Modal(
    {
        modalBackgroundRef,
        isShowModal,
        title,
        content,
        successAction,
        clickModalBackground,
        closeModal
    }) {
    return (
        <div
            ref={modalBackgroundRef}
            className={`modal-wrapper ${isShowModal ? 'show' : 'closed'}`}
            onClick={clickModalBackground}
        >
            <div className='modal'>
                <div className="modal-header">
                    <h1 className="modal-header-title">
                        {title}
                    </h1>
                    <button className="btn-close modal-header-close" onClick={closeModal}>X</button>
                </div>
                <div className="modal-content">{content}</div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={closeModal}>닫기</button>
                    <button className="btn btn-success" onClick={successAction}>성공</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;