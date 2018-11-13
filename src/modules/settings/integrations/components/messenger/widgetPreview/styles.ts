import { colors, dimensions, typography } from 'modules/common/styles';
import { rgba } from 'modules/common/styles/color';
import { LogoContainer } from 'modules/settings/styles';
import styled from 'styled-components';
import styledTS from 'styled-components-ts';

const coreSpace = `${dimensions.coreSpacing}px`;
const unitSpace = `${dimensions.unitSpacing}px`;

const ErxesTopbar = styled.div`
  transition: height 0.25s ease-in-out;
  background-image: url(https://s3.amazonaws.com/erxes/pattern.png);
  background-repeat: repeat;
  background-size: cover;
  position: relative;
  z-index: 10;
  box-shadow: 0 4px 6px 0 ${rgba(colors.colorBlack, 0.1)};

  &:before {
    background: url(https://s3.amazonaws.com/erxes/radial.png) left top
      no-repeat;
    background-size: cover;
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const ErxesMiddle = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-around;
  min-height: 70px;
  width: auto;
  height: auto;

  .topbar-button {
    transition: background 0.3s ease-in-out;
    background: none;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    display: block;
    height: 40px;
    line-height: 40px;
    outline: none;
    text-align: center;
    position: absolute;
    top: 15px;
    width: 40px;
    z-index: 100;
    color: ${colors.colorWhite};

    &:hover {
      background-color: ${rgba(colors.colorBlack, 0.2)};
    }
  }

  .left {
    left: 15px;
  }

  .right {
    right: 15px;
  }
`;

const ErxesMiddleTitle = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-shrink: 0;
  height: 100%;
  justify-content: center;
  transition-property: background, opacity;
`;

const ErxesTopbarMiddle = styled.div`
  padding: 20px 60px 20px 65px;
`;

const WelcomeInfo = styled.div`
  h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 0 0 10px;
    padding-right: 50px;
  }

  span {
    color: rgba(255, 255, 255, 0.8);
    font-size: 13px;
    line-height: 21px;
  }
`;

const ErxesSupporters = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;

  img {
    border-radius: 22px;
    display: block;
    height: 40px;
    width: 40px;
  }
`;

const ErxesStaffProfile = styled.div`
  position: relative;
`;

const ErxesStaffName = styled.div`
  font-size: ${typography.fontSizeBody}px;
  font-weight: ${typography.fontWeightMedium};
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 3px;
  margin-left: 43px;
`;

const ErxesState = styled.div`
  font-size: ${typography.fontSizeUppercase}px;
  font-weight: ${typography.fontWeightLight};
  margin-left: 43px;
`;

const ErxesSpacialMessage = styled.li`
  background-color: #eaebed;
  border-radius: 10px;
  box-shadow: 0 1px 1px 0 ${rgba(colors.colorBlack, 0.2)};
  color: ${colors.textSecondary};
  margin-bottom: ${coreSpace};
  padding: ${coreSpace};
`;

const ErxesAvatar = styled.div`
  border-radius: 50%;
  bottom: ${coreSpace};
  height: 40px;
  left: 0;
  overflow: hidden;
  position: absolute;
  width: 40px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ErxesMessagesList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #faf9fb;
  overflow: auto;
  padding: 20px;
  margin: 0;
  flex: 1;
  list-style: none;
  background-repeat: repeat;
  background-position: 0 0;

  &.background-1 {
    background-image: url('/images/patterns/bg-1.png');
  }
  &.background-2 {
    background-image: url('/images/patterns/bg-2.png');
  }
  &.background-3 {
    background-image: url('/images/patterns/bg-3.png');
  }
  &.background-4 {
    background-image: url('/images/patterns/bg-4.png');
  }

  li {
    position: relative;
    margin-bottom: 10px;
  }
`;

const ErxesMessage = styled.div`
  background-color: #eaebed;
  border-radius: ${coreSpace};
  border-bottom-left-radius: 2px;
  box-shadow: 0 1px 1px 0 ${rgba(colors.colorBlack, 0.2)};
  color: #686868;
  display: inline-block;
  margin: 0 ${coreSpace} 5px 50px;
  padding: 12px ${coreSpace};
  position: relative;
  text-align: left;
  word-break: break-word;
`;

const ErxesDate = styled.div`
  font-size: ${unitSpace};
  color: ${colors.colorCoreGray};
  margin-left: ${dimensions.headerSpacing}px;
`;

const ErxesMessageSender = styled.div`
  overflow: hidden;
  font-size: ${typography.fontSizeHeading8}px;
  padding: 17px 30px;
  color: ${colors.colorCoreGray};
  border-top: 1px solid ${colors.colorWhite};
`;

const ErxesFromCustomer = styled.li`
  text-align: right;
`;

const FromCustomer = ErxesMessage.extend`
  border-bottom-left-radius: ${coreSpace};
  border-top-right-radius: 2px;
  color: #fff;
  margin: 0 0 5px ${coreSpace};
  text-align: right;
`;

const StateSpan = styledTS<{ state: boolean }>(styled.span)`
  border-radius: 10px;
  display: inline-block;
  height: 8px;
  margin-bottom: 1px;
  width: 8px;
  bottom: 2px;
  position: absolute;
  right: 2px;
  z-index: 2;
  background-color: ${props =>
    props.state ? colors.colorCoreGreen : colors.colorLightGray};
`;

const WidgetPreviewStyled = styled.div`
  background: ${colors.colorWhite};
  color: ${colors.colorWhite};
  border-radius: ${dimensions.unitSpacing}px;
  border-bottom-right-radius: 25px;
  bottom: 70px;
  box-shadow: 0 2px 16px 1px ${rgba(colors.colorBlack, 0.2)};
  display: flex;
  flex-direction: column;
  height: calc(100% - 95px);
  max-height: 720px;
  overflow: hidden;
  position: absolute;
  right: 8px;
  width: 380px;
  z-index: 2;
`;

const Messenger = styled.div`
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
`;

const Launcher = LogoContainer.extend`
  position: fixed;
  right: 20px;
  bottom: 20px;
  transition: box-shadow 0.3s ease-in-out, background-image 0.3s ease-in;
  animation: pop 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1;
`;

export {
  ErxesMiddle,
  ErxesTopbar,
  ErxesState,
  ErxesSupporters,
  ErxesMessage,
  ErxesMiddleTitle,
  ErxesSpacialMessage,
  ErxesAvatar,
  ErxesDate,
  ErxesMessageSender,
  ErxesFromCustomer,
  ErxesMessagesList,
  FromCustomer,
  StateSpan,
  ErxesTopbarMiddle,
  ErxesStaffName,
  ErxesStaffProfile,
  WelcomeInfo,
  WidgetPreviewStyled,
  Messenger,
  Launcher
};
