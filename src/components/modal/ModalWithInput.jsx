import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function ModalWithInput({
  isOpen,
  onClose,
  title,
  titleValue,
  descriptionValue,
  onTitleChange,
  onDescriptionChange,
  saveActionText,
  saveAction,
  primaryActionText,
  primaryAction,
}) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 bold-Inter">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900 text-3xl "
                  >
                    {title}
                  </DialogTitle>
                  <div className="m-2 mt-5 ">
                    <p className="text-2xl text-gray-500 ">Title</p>
                    <input
                      type="text"
                      value={titleValue}
                      onChange={onTitleChange}
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>
                  <hr />
                  <div className="m-2">
                    <p className="text-md text-gray-500">Description</p>
                    <textarea
                      value={descriptionValue}
                      onChange={onDescriptionChange}
                      rows={3}
                      className="w-full border border-gray-300 p-2 rounded"
                    />
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              {primaryAction && (
                <button
                  type="button"
                  onClick={primaryAction}
                  className="inline-flex w-full justify-center rounded-md bg-custom-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  {primaryActionText}
                </button>
              )}

              {saveAction && (
                <button
                  type="button"
                  onClick={saveAction}
                  className="inline-flex w-full justify-center rounded-md bg-green-600  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-blue sm:ml-3 sm:w-auto"
                >
                  {saveActionText}
                </button>
              )}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
