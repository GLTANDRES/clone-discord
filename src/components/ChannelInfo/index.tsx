import React from "react";

import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      <Title> Chat-venecos </Title>

      <Separator />

      <Description>canal abierto para elegir</Description>
    </Container>
  );
};

export default ChannelInfo;
