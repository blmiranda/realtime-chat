import defaultProfileImage from '../../../../assets/images/profile.png';
import { ADDRESS } from '../../../../services/defaultAxiosClient';

function thumbnail(url: string | undefined | null) {
  if (!url) {
    return defaultProfileImage;
  }

  return {
    uri: `http://${ADDRESS}${url}`,
  };
}

export default thumbnail;
