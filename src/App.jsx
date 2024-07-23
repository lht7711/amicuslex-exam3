import './App.css';
import {useEffect, useRef, useState} from "react";
import Modal from "./components/Modal";

function App() {
    // useRef를 사용하여 모달 백그라운드 클릭시에 대한 상태 확인을 위해 ref 객체를 생성한다.
    const modalBackgroundRef = useRef();

    const [isShowModal, setIsShowModal] = useState(false);
    const [isActiveCloseModalBackgroundClick, setIsActiveCloseModalBackgroundClick] = useState(true);

    // 페이지 초기화시 Keydown EventListener 를 할당하여 만약 모달이 활성화 되어있고 esc키를 누를시 모달을 종료하는 Effect hook 초기화
    useEffect(() => {
        const keydownEscapeModalClose = (e) => {
            const keyCode = e.keyCode;
            if (keyCode === 27 && isShowModal){
                closeModal();
            }
        }
        window.addEventListener('keydown', keydownEscapeModalClose);
        return () => window.removeEventListener('keydown', keydownEscapeModalClose)
    }, []);

    // 모달을 보여주기 위한 핸들러
    const showModal = () => {
        setIsShowModal(true);
    }

    // 성공버튼 클릭시 실행되는 핸들러
    const successModal = () => {
        if (window.confirm('성공 했습니다! 확인을 누르면 모달이 종료됩니다.')) {
            closeModal()
        }
    }

    // 모달의 background 클릭시 모달을 background 클릭시 종료 활성화 상태가 true면 종료하는 핸들러
    const clickModalBackground = (e) => {
        if(e.target === modalBackgroundRef.current && isActiveCloseModalBackgroundClick) {
            closeModal()
        }
    }

    // 일반적인 모달 종료 핸들러
    const closeModal = () => {
        setIsShowModal(false);
    }

    // 배경 클릭시 종료를 활성화 및 비활성화 하는 핸들러
    const onChangeCloseModalBackgroundClick = (e) => {
        if (e.target.id === 'activeBackgroundClose') {
            setIsActiveCloseModalBackgroundClick(true);
            return;
        }
        setIsActiveCloseModalBackgroundClick(false);
    }

    // 모달의 컨텐츠 내용
    const modalContents = () => {
        return (
            <>
                <p>LawForm 의 모달 컨텐츠 내용입니다!</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
                <p>당신은 모달을 열었습니다. 여러가지 테스트를 진행해 보세요 :).</p>
            </>
        )
    }

    return (
        <>
            <div className="main">
                <h1>아미쿠스렉스: 로폼 코딩테스트 과제 3번 답안</h1>
                <div>
                    <label htmlFor="activeBackgroundClose">
                        <input
                            type="radio"
                            id="activeBackgroundClose"
                            name="isActiveBackgroundClose"
                            checked={isActiveCloseModalBackgroundClick}
                            onChange={onChangeCloseModalBackgroundClick}
                        />
                        배경클릭 종료 활성화
                    </label>
                    <label htmlFor="inActiveBackgroundClose">
                        <input
                            type="radio"
                            id="inActiveBackgroundClose"
                            name="isActiveBackgroundClose"
                            onChange={onChangeCloseModalBackgroundClick}
                        />
                        배경클릭 종료 비활성화
                    </label>
                </div>
                <button className='btn btn-primary' onClick={showModal}>모달 열기</button>
            </div>
            {
                isShowModal &&
                <Modal
                    modalBackgroundRef={modalBackgroundRef}
                    isShowModal={isShowModal}
                    title="모달의 타이틀 입니다"
                    content={modalContents()}
                    successAction={successModal}
                    clickModalBackground={clickModalBackground}
                    closeModal={closeModal}
                />
            }

        </>
    );
}

export default App;
