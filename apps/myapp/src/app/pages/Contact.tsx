import { Checkbox, Form, Input, Button, DatePicker } from 'antd';
import styled from '@emotion/styled';
import moment from 'moment';

const PageContainer = styled.div`
  padding: 20px 30px;
`;

const Title = styled.h2`
  margin: 0;
  padding-bottom: 0;

  & + div {
    margin-bottom: 20px;
  }
`;

const FormItem = styled(Form.Item)`
  margin-bottom: 10px;
  width: 171px;

  label {
    font-weight: bold;
  }
`;

const Contact = ({ form }) => {
  const { getFieldDecorator } = form;

  return (
    <PageContainer>
      <Title>Contact Us</Title>
      <div>Using this form, you can directly send a message to us.</div>

      <Form>
        <FormItem label="Name" required>
          {getFieldDecorator(
            'name',
            {}
          )(<Input type="text" placeholder="John Doe" />)}
        </FormItem>

        <FormItem label="Date of Birth" required>
          {getFieldDecorator('birthDate', {
            initialValue: moment('01/01/2015', 'DD/MM/YYYY'),
          })(<DatePicker />)}
        </FormItem>

        <FormItem label="Message" required>
          {getFieldDecorator(
            'message',
            {}
          )(<Input.TextArea rows={6} style={{ minWidth: 360 }} />)}
        </FormItem>

        <p>
        {getFieldDecorator('termsAndConditions', {})(<Checkbox>I agree to <a href="./assets/terms-and-conditions.pdf" target="_blank" >terms and conditions</a>.</Checkbox>)}</p>

        <Button type="primary">Send Message</Button>
      </Form>
    </PageContainer>
  );
};

export default Form.create()(Contact);
