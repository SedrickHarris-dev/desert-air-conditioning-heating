import { handleChatPost } from "../../src/lib/server/chat";

export const onRequestPost: PagesFunction = ({ request }) => handleChatPost(request);
