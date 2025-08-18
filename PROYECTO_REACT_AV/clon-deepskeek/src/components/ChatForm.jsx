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
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center gap-3 p-4 bg-white/10 border-t border-white/20"
        >
            <input
                type="text"
                {...register("message")}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-2 rounded-full bg-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
                type="submit"
                className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300 shadow-lg"
            >
                <SendHorizontal size={20} />
            </button>
        </form>
    );
}
