import React, { forwardRef } from "react";

type DialogueModalProps = {
    alert: string;
    type: "Confirmation" | "Error";
    onYes: () => void;
};

const DialogueModal = forwardRef<HTMLDialogElement, DialogueModalProps>(
    ({ alert, type, onYes }, ref) => {
        const isError = type === "Error";

        return (
            <dialog
                ref={ref}
                className="w-full max-w-md backdrop-blur-sm bg-white border border-gray-300 rounded-lg shadow-lg p-6 transform transition-transform duration-300 scale-100 open:scale-100 open:opacity-100 opacity-0"
            >
                <div className="text-center">
                    {/* Header */}
                    <div className={`text-2xl font-semibold ${isError ? "text-red-600" : "text-green-600"}`}>
                        {isError ? "Error" : "Confirmation"}
                    </div>

                    {/* Alert Message */}
                    <p className="mt-4 text-gray-700">{alert}</p>

                    {/* Buttons */}
                    <div className="mt-6 flex justify-center gap-4">
                        {type === "Confirmation" && (
                            <button
                                onClick={onYes}
                                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                            >
                                Yes
                            </button>
                        )}
                        <button
                            onClick={() =>
                                (ref as React.RefObject<HTMLDialogElement>).current?.close()
                            }
                            className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </dialog>
        );
    }
);
DialogueModal.displayName = "DialogueModal";

export default DialogueModal;
