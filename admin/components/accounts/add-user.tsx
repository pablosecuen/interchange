import { Button, Divider, Input, Modal, Text } from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";

export const AddUser = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <Button auto onClick={handler}>
        Agregar Alumno
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        width="600px"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header css={{ justifyContent: "start" }}>
          <Text id="modal-title" h4>
            Agregar nuevo alumno
          </Text>
        </Modal.Header>
        <Divider css={{ my: "$5" }} />
        <Modal.Body css={{ py: "$10" }}>
          <Flex
            direction={"column"}
            css={{
              flexWrap: "wrap",
              gap: "$8",
              "@lg": { flexWrap: "nowrap", gap: "$12" },
            }}
          >
            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Input label="Nombre" bordered clearable fullWidth size="lg" placeholder="Nombre" />
              <Input
                label="Apellido"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Apellido"
              />
            </Flex>

            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Input label="Email" clearable bordered fullWidth size="lg" placeholder="Email" />
              <Input
                label="Telefono"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Telefono"
              />
            </Flex>
            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Input label="Curso" clearable bordered fullWidth size="lg" placeholder="Curso" />
              <Input label="Año" clearable bordered fullWidth size="lg" placeholder="Año" />
            </Flex>
          </Flex>
        </Modal.Body>
        <Divider css={{ my: "$5" }} />
        <Modal.Footer>
          <Button auto onClick={closeHandler}>
            Agregar Usuario
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
