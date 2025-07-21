import { useForm } from "react-hook-form";
import { SendHorizontal } from "lucide-react";

export default function ChatForm({ onSend }) {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        if (data.message.trim()) {
            onSend(data.message);
            reset();
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex bg-gray-800">
            <input
                type="text"
                {...register("message")}
                placeholder="Escribe tu mensaje..."
                className="flex-1 p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none"
            />
            <button type="submit" className="ml-2 p-2 bg-blue-600 rounded-lg">
                <SendHorizontal size={20} />
            </button>
        </form>
    );
}
