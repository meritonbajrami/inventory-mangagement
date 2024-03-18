import { Modal } from "antd";
import info from "../../assets/info.svg";
import x from "../../assets/x.svg";

export default function CustomModal({ children, isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <Modal
          closable={false}
          width="868px"
          open={isOpen}
          footer={null}
          centered={true}
        >
          <header className="w-full flex items-center px-6 rounded-tl-md rounded-tr-md justify-between bg-alabaster h-[45px]">
            <h1 className="font-semibold text-base">Title</h1>
            <img
              src={x}
              alt="x icon"
              className="cursor-pointer"
              onClick={onClose}
            />
          </header>
          <main className="px-6 py-4 flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <img src={info} alt="info icon" />
              <p>
                Informative piece of text that can be used regarding this modal.
              </p>
            </div>
            {children}
          </main>
        </Modal>
      )}
    </>
  );
}
