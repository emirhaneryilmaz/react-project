import { useState } from 'react';

function Modal() {
  const [show, setShow] = useState(false);

  const closeModal = () => {
    setShow(false);
  }

  return (
    <div>
      <button onClick={() => setShow(true)}>Open Modal</button>

      {show ? (
        <div className="modal" id="gizlilikGuvenlik">
          <div className="modal-container">
            <span className="close" onClick={closeModal}><i className="edk-fonticon-close"></i></span>
            <h3>Gizlilik ve Güvenlik</h3>
            <div className="modal-content">
              <p>e-Devlet Kapısı çalışanları hiçbir zaman size şifrenizi sormayacaktır. Şifrenizi e-Devlet Kapısı giriş ekranları haricinde hiçbir yere kaydetmeyiniz. Tarayıcı uygulaması (Internet Explorer, Firefox, Safari ve benzeri uygulamaların) şifre kaydetme opsiyonlarını kapalı tutunuz. Ayrıca hiçbir zaman kişisel bilgileriniz veya şifreniz e-posta yolu ile sizlere sorulmayacaktır. Unutmayınız ki zararlı uygulamaların ve virüslerin büyük çoğunluğu e-posta yolu ile yayılmaktadır. Bu sebeple göndericisini tanımadığınız veya şüpheli e-postaları okumadan siliniz.</p>
              <p>e-Devlet Kapısı sistemi, güvenlik amaçlı olarak elektronik sertifika kullanmaktadır. Erişiminizin güvenli olup olmadığını adres çubuğunda yer alan adresin http değil https ile başlamasından ve tarayıcı uygulamasındaki kilit resminden anlayabilirsiniz.</p>
            </div>
            <div className="modal-footer">
              <div className="formSubmitRow">
                <button className="cancelButton" onClick={closeModal}>Kapat</button>
              </div>
            </div>
          </div>
          <div className="modalBg"></div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
