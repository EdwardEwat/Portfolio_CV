import React, { useState } from "react";
import { Button, Input, Form, Modal } from "antd";
import { sendMail } from "../../../redux/ThongTinSlice/thongTinSlice";
import { useDispatch } from "react-redux";

const MailDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleSend = (values) => {
    const params = {
      email: values.email,
      message: values.message,
    };
    console.log("Send mail:", params);
    dispatch(sendMail(params));
    setIsOpen(false);
    form.resetFields();
  };

  return (
    <div className="mail-dialog">
      <Button className="m-5" type="primary" onClick={() => setIsOpen(true)}>
        Send message to my mail
      </Button>
      <Modal
        title="Send message to my mail"
        centered
        open={isOpen}
        onOk={() => form.submit()}
        onCancel={() => setIsOpen(false)}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
          xxl: "40%",
        }}
      >
        <Form form={form} layout="vertical" onFinish={handleSend}>
          <Form.Item
            label="Your Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "The input is not a valid email!",
              },
            ]}
          >
            <Input placeholder="Your mail" />
          </Form.Item>
          <Form.Item
            label="Your Message"
            name="message"
            rules={[
              {
                required: true,
                message: "Please input your message!",
              },
            ]}
          >
            <Input.TextArea placeholder="Your message" rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default MailDialog;
