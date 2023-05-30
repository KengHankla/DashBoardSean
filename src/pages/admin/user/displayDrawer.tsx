import { Numeric } from "helper/inputNumber";
import { Col, Divider, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useTranslation } from "react-i18next";

export const useDisplayDrawer = () => {
  const { t } = useTranslation();
  const displayContentDrawerUser = () => {
    return (
      <>
        <Row gutter={10}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item
              label={t("First name")}
              name="firstName"
              rules={[
                {
                  required: true,
                  message: t("Please enter") + t("First name"),
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item
              label={t("Last name")}
              name="lastName"
              rules={[
                { required: true, message: t("Please enter") + t("Last name") },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={10}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item
              label={t("Username")}
              name="userId"
              rules={[
                {
                  required: true,
                  message: t("Please enter") + t("Username"),
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item
              label={t("Password")}
              name="password"
              rules={[
                { required: true, message: t("Please enter") + t("Password") },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Col span={24}>
          <Form.Item
            label={t("Address")}
            name="address"
            rules={[
              {
                required: true,
                message: t("Please enter") + t("Address"),
              },
            ]}
          >
            <TextArea />
          </Form.Item>
        </Col>

        <Row gutter={10}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item
              label={t("Phone Number")}
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: t("Please enter") + t("Phone Number"),
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item
              label={t("Phone Number Second")}
              name="phoneNumberSecond"
              rules={[
                {
                  required: true,
                  message: t("Please enter") + t("Phone Number Second"),
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={10}>
          <Col span={12}>
            <Form.Item
              label={`${t("Line ID")} (${t("User")})`}
              name="lineId"
              rules={[
                {
                  required: true,
                  message: t("Please enter") + t("Line ID"),
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={t("Source")}
              name="source"
              rules={[
                {
                  required: true,
                  message: t("Please enter") + t("Source"),
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Divider />

        <Row gutter={10}>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Form.Item
              label={t("Total Deposit")}
              name="totalDeposit"
              rules={[
                {
                  required: true,
                  message: t("Please enter") + t("Total Deposit"),
                },
              ]}
            >
              <Numeric />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Form.Item
              label={t("Total Bonus")}
              name="totalBonus"
              rules={[
                {
                  required: true,
                  message: t("Please enter") + t("Total Bonus"),
                },
              ]}
            >
              <Numeric />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Form.Item
              label={t("Total Withdraw")}
              name="totalBonus"
              rules={[
                {
                  required: true,
                  message: t("Please enter") + t("Total Withdraw"),
                },
              ]}
            >
              <Numeric />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={10}>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Form.Item
              label={t("Deposit Amount")}
              name="depositAmount"
              rules={[
                {
                  required: true,
                  message: t("Please enter") + t("Deposit Amount"),
                },
              ]}
            >
              <Numeric />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Form.Item
              label={t("Bonus Amount")}
              name="bonusAmount"
              rules={[
                {
                  required: true,
                  message: t("Please enter") + t("Bonus Amount"),
                },
              ]}
            >
              <Numeric />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Form.Item
              label={t("Withdraw Amount")}
              name="withDrawAmount"
              rules={[
                {
                  required: true,
                  message: t("Please enter") + t("Withdraw Amount"),
                },
              ]}
            >
              <Numeric />
            </Form.Item>
          </Col>
        </Row>

        <Col span={8}>
          <Form.Item
            label={t("Total Point")}
            name="totalPoint"
            rules={[
              {
                required: true,
                message: t("Please enter") + t("Total Point"),
              },
            ]}
          >
            <Numeric />
          </Form.Item>
        </Col>
      </>
    );
  };

  return { displayContentDrawerUser };
};
