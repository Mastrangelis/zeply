import { copyText } from "@/utils/copyText";
import { Filter } from "constants/enums";

describe("Copy To Clipboard Testing", () => {
  it("Should be aple to copy a text to clipboard", () => {
    let copiedText: string = "";
    Object.assign(window.navigator, {
      clipboard: {
        writeText: jest
          .fn()
          .mockImplementation((text: string) =>
            Promise.resolve((copiedText = text))
          ),
      },
    });

    copyText("copiedToClipboard", Filter.ADDRESS);
    expect(copiedText).toBe("copiedToClipboard");
  });
});
