export interface VideoData {
  title: string;
  videoId: string;
  thumbnail?: string;
}

export const featuredVideo: VideoData = {
  title: "Illusionist Aakarsh Official Showreel",
  videoId: "M2OqQbyXU6M",
  thumbnail: "https://img.youtube.com/vi/M2OqQbyXU6M/maxresdefault.jpg",
};

export const rightVideos: VideoData[] = [
  { title: "Magic Performance 1", videoId: "S2XKOvTq5yA" },
  { title: "Magic Performance 2", videoId: "iCs4JdZK8S4" },
  { title: "Magic Performance 3", videoId: "y3DN3BZ3lRQ" },
  { title: "Magic Performance 4", videoId: "Wkbb17LVcMs" },
];

export const youtubeChannelUrl = "https://www.youtube.com/@Aakarshmagic";

