import { render } from "@testing-library/react";
import ChatWindow from "./ChatWindow";

describe("ChatWindow Component", () => {
  test("renders messages correctly", () => {
    const messages = ["Message 1", "Message 2", "Message 3"];
    const { getByText } = render(
      <ChatWindow
        friend="Friend 1"
        messages={messages}
        sendMessage={() => {}}
      />
    );

    messages.forEach((message) => {
      const messageElement = getByText(message);
      expect(messageElement).toBeInTheDocument();
    });
  });
});
