import { prisma } from '~/utils/prisma.server';

enum Platform {
  YOUTUBE 
  INSTAGRAM 
  GITHUB 
  FACEBOOK 
  TWITTER
}

export const getAccountFromSocial = async (platform, username) => {
  const data = prisma.socialAccount.findUnique({
    where: {
      socialPlatform: platform,
      username: username
    }
  });
}

export const getAccountNameFromSocial = (platform) => {
  if(platform === Platform.YOUTUBE) 
    return "YouTube Logo";
  if(platform === Platform.INSTAGRAM)
    return "Instagram Logo";
  if(platform === Platform.GITHUB)
    return "Github Logo";
  if(platform === Platform.FACEBOOK)
    return "Facebook Logo";
  if(platform === Platform.TWITTER)
    return "Twitter Logo";
}
