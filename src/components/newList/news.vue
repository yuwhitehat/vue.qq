<template>
  <div class="news">
    <div class="user-header">
      <img
        :src="news && news.user.avatar"
        alt=""
        class="avatar"
      >
      <div class="detail">
        <div class="nick">{{news && news.user.nick}}</div>
        <div class="time">{{news && news.content.time}}</div>
      </div>
      <div
        class="btn-menu"
        @click="openOptMenu"
      ></div>
    </div>
    <div class="news-content">
      <div class="content-txt">{{news && news.content.txt}}</div>
      <div
        class="content-imgs"
        v-if="news && news.content.imgList"
      >
        <img
          v-for="img in news.content.imgList"
          :key="img"
          :src="img"
          alt=""
          :class="{ single: news.content.imgList.length === 1 }"
        >
      </div>
      <div class="content-video" v-if="news && news.content.video">
        <video
          controls
          class="video"
          ref="video"
          :src="news.content.video.url"
        ></video>
      </div> 
    </div>
    <div class="news-footer">
        <div class="options">
            <div class="visited-num">
                浏览{{news && news.content.visitedNum}}次
            </div>
            <div class="btns">
                <button 
                    v-if="news && news.liked"
                    class="btn-liked"
                    @click="handleLike"
                ></button>
                <button v-else class="btn-like" @click="handleLike"></button>
                <button class="btn-comment" @click="focusToComment"></button>
            </div>
        </div>
        <div class="liked-num">{{likedTxt}}</div>
        <div class="comments" v-if="commentList.length">
            <div class="comment" v-for="(comment, index) in commentList" :key="index"></div>
            <span class="username">{{commentList.userName}}</span>
            <span v-if="comment.feedUserName">回复
                <span class="userName">{{comment.feedUserName}}</span>
            </span>:{{comment.txt}}
        </div>
        <div class="option-comment">
            <input ref="commentInput" type="text" v-model="comment" placeholder="评论" @keyup.enter="addComment">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
};
</script>

<style lang="scss" scoped>
@import "./styles/lib.scss";
</style>
