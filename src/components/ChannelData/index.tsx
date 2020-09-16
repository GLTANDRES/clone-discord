import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);
  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Andres Gordillo"
            date="21/06/2020"
            content="peguelo ñero"
          />
        ))}
        <ChannelMessage
          author="Andres Gordillo"
          date="21/06/2020"
          content="peguelo ñero"
        />

        <ChannelMessage
          author="pegueliño"
          date="21/06/2020"
          content="zepequeñio"
        />

        <ChannelMessage
          author="Andres Gordillo"
          date="21/06/2020"
          content="peguelo ñero"
        />

        <ChannelMessage
          author="Andres Gordillo"
          date="21/06/2020"
          content="peguelo ñero"
        />
        <ChannelMessage
          author="Andres Gordillo"
          date="21/06/2020"
          content={
            <>
              <Mention>@pegueliño mmi perro </Mention> efwrwrfwef
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      <Container>
        <InputWrapper>
          <Input type="text" placeholder="Conversar en  # chat libre" />
          {/* <InputIcon /> */}
        </InputWrapper>
      </Container>
    </Container>
  );
};

export default ChannelData;
