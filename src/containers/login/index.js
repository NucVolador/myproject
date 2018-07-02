import React,{Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import './style.css';
const FormItem = Form.Item;

class LoginMiddle extends Component{
      constructor(props, context) {
            super(props, context);
            // this.handleChange = this.handleChange.bind(this);
            this.state = {
                  username: null,
                  password: null,
                  errorMessage : null
            };
      }

      handleSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                  if (!err) {
                        console.log('Received values of form: ', values);
                  }
            });
      }
      render() {
            const { getFieldDecorator } = this.props.form;
            return (
                <Row>
                      <Col xs={{span:20,offset:2}} md={{span:18,offset:3}} lg={{span:6,offset:9 }}>
                              <Form layout='vertical' onSubmit={this.handleSubmit} className="login-form">
                                  <FormItem label='用户名'>
                                        {getFieldDecorator('userName', {
                                              rules: [{ required: true, message: '用户名不能为空' }],
                                        })(
                                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}  />
                                        )}
                                  </FormItem>
                                  <FormItem label='密码'>
                                        {getFieldDecorator('password', {
                                              rules: [{ required: true, message: '密码不能为空' },
                                                    {min : 6,message:'密码不得少于6位数'}],
                                        })(
                                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" />
                                        )}
                                  </FormItem>
                                  <FormItem>
                                        {getFieldDecorator('remember', {
                                              valuePropName: 'checked',
                                              initialValue: true,
                                        })(
                                            <Checkbox>记住密码</Checkbox>
                                        )}
                                        <a className="login-form-forgot" href="">找回密码</a>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                              登录
                                        </Button>
                                        没有账号？ <a href="">立即注册！</a>
                                  </FormItem>
                              </Form>
                      </Col>
                </Row>
            );
      }
}
const Login = Form.create()(LoginMiddle);
export default Login;