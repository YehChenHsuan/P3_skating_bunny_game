/**
 * ALICE ESL Phonics P3 - 小兔冰上拼讀大冒險題庫
 * 課本學習範圍：Page 04 - 12
 * 主題：Beginning Sounds & Long Vowels (Silent E / Two Vowels)
 */

const P3_VOCABULARY = [
  {
    "id": "June",
    "word": "June",
    "zh": "June",
    "image": "P3_flashcards_images/P3_June.webp",
    "audioEn": "P3_flashcards_audios/P3_June.mp3",
    "audioZh": "P3_flashcards_audios/P3_June_zh.mp3"
  },
  {
    "id": "TRUE",
    "word": "TRUE",
    "zh": "TRUE",
    "image": "P3_flashcards_images/P3_TRUE.webp",
    "audioEn": "P3_flashcards_audios/P3_TRUE.mp3",
    "audioZh": "P3_flashcards_audios/P3_TRUE_zh.mp3"
  },
  {
    "id": "bay",
    "word": "bay",
    "zh": "bay",
    "image": "P3_flashcards_images/P3_bay.webp",
    "audioEn": "P3_flashcards_audios/P3_bay.mp3",
    "audioZh": "P3_flashcards_audios/P3_bay_zh.mp3"
  },
  {
    "id": "bike",
    "word": "bike",
    "zh": "bike",
    "image": "P3_flashcards_images/P3_bike.webp",
    "audioEn": "P3_flashcards_audios/P3_bike.mp3",
    "audioZh": "P3_flashcards_audios/P3_bike_zh.mp3"
  },
  {
    "id": "blow",
    "word": "blow",
    "zh": "blow",
    "image": "P3_flashcards_images/P3_blow.webp",
    "audioEn": "P3_flashcards_audios/P3_blow.mp3",
    "audioZh": "P3_flashcards_audios/P3_blow_zh.mp3"
  },
  {
    "id": "blue",
    "word": "blue",
    "zh": "blue",
    "image": "P3_flashcards_images/P3_blue.webp",
    "audioEn": "P3_flashcards_audios/P3_blue.mp3",
    "audioZh": "P3_flashcards_audios/P3_blue_zh.mp3"
  },
  {
    "id": "boat",
    "word": "boat",
    "zh": "boat",
    "image": "P3_flashcards_images/P3_boat.webp",
    "audioEn": "P3_flashcards_audios/P3_boat.mp3",
    "audioZh": "P3_flashcards_audios/P3_boat_zh.mp3"
  },
  {
    "id": "cake",
    "word": "cake",
    "zh": "cake",
    "image": "P3_flashcards_images/P3_cake.webp",
    "audioEn": "P3_flashcards_audios/P3_cake.mp3",
    "audioZh": "P3_flashcards_audios/P3_cake_zh.mp3"
  },
  {
    "id": "chinese",
    "word": "chinese",
    "zh": "chinese",
    "image": "P3_flashcards_images/P3_chinese.webp",
    "audioEn": "P3_flashcards_audios/P3_chinese.mp3",
    "audioZh": "P3_flashcards_audios/P3_chinese_zh.mp3"
  },
  {
    "id": "cone",
    "word": "cone",
    "zh": "cone",
    "image": "P3_flashcards_images/P3_cone.webp",
    "audioEn": "P3_flashcards_audios/P3_cone.mp3",
    "audioZh": "P3_flashcards_audios/P3_cone_zh.mp3"
  },
  {
    "id": "cube",
    "word": "cube",
    "zh": "cube",
    "image": "P3_flashcards_images/P3_cube.webp",
    "audioEn": "P3_flashcards_audios/P3_cube.mp3",
    "audioZh": "P3_flashcards_audios/P3_cube_zh.mp3"
  },
  {
    "id": "cute",
    "word": "cute",
    "zh": "cute",
    "image": "P3_flashcards_images/P3_cute.webp",
    "audioEn": "P3_flashcards_audios/P3_cute.mp3",
    "audioZh": "P3_flashcards_audios/P3_cute_zh.mp3"
  },
  {
    "id": "day",
    "word": "day",
    "zh": "day",
    "image": "P3_flashcards_images/P3_day.webp",
    "audioEn": "P3_flashcards_audios/P3_day.mp3",
    "audioZh": "P3_flashcards_audios/P3_day_zh.mp3"
  },
  {
    "id": "dive",
    "word": "dive",
    "zh": "dive",
    "image": "P3_flashcards_images/P3_dive.webp",
    "audioEn": "P3_flashcards_audios/P3_dive.mp3",
    "audioZh": "P3_flashcards_audios/P3_dive_zh.mp3"
  },
  {
    "id": "door",
    "word": "door",
    "zh": "door",
    "image": "P3_flashcards_images/P3_door.webp",
    "audioEn": "P3_flashcards_audios/P3_door.mp3",
    "audioZh": "P3_flashcards_audios/P3_door_zh.mp3"
  },
  {
    "id": "eat",
    "word": "eat",
    "zh": "eat",
    "image": "P3_flashcards_images/P3_eat.webp",
    "audioEn": "P3_flashcards_audios/P3_eat.mp3",
    "audioZh": "P3_flashcards_audios/P3_eat_zh.mp3"
  },
  {
    "id": "face",
    "word": "face",
    "zh": "face",
    "image": "P3_flashcards_images/P3_face.webp",
    "audioEn": "P3_flashcards_audios/P3_face.mp3",
    "audioZh": "P3_flashcards_audios/P3_face_zh.mp3"
  },
  {
    "id": "feet",
    "word": "feet",
    "zh": "feet",
    "image": "P3_flashcards_images/P3_feet.webp",
    "audioEn": "P3_flashcards_audios/P3_feet.mp3",
    "audioZh": "P3_flashcards_audios/P3_feet_zh.mp3"
  },
  {
    "id": "float",
    "word": "float",
    "zh": "float",
    "image": "P3_flashcards_images/P3_float.webp",
    "audioEn": "P3_flashcards_audios/P3_float.mp3",
    "audioZh": "P3_flashcards_audios/P3_float_zh.mp3"
  },
  {
    "id": "flute",
    "word": "flute",
    "zh": "flute",
    "image": "P3_flashcards_images/P3_flute.webp",
    "audioEn": "P3_flashcards_audios/P3_flute.mp3",
    "audioZh": "P3_flashcards_audios/P3_flute_zh.mp3"
  },
  {
    "id": "game",
    "word": "game",
    "zh": "game",
    "image": "P3_flashcards_images/P3_game.webp",
    "audioEn": "P3_flashcards_audios/P3_game.mp3",
    "audioZh": "P3_flashcards_audios/P3_game_zh.mp3"
  },
  {
    "id": "gate",
    "word": "gate",
    "zh": "gate",
    "image": "P3_flashcards_images/P3_gate.webp",
    "audioEn": "P3_flashcards_audios/P3_gate.mp3",
    "audioZh": "P3_flashcards_audios/P3_gate_zh.mp3"
  },
  {
    "id": "glue",
    "word": "glue",
    "zh": "glue",
    "image": "P3_flashcards_images/P3_glue.webp",
    "audioEn": "P3_flashcards_audios/P3_glue.mp3",
    "audioZh": "P3_flashcards_audios/P3_glue_zh.mp3"
  },
  {
    "id": "go",
    "word": "go",
    "zh": "go",
    "image": "P3_flashcards_images/P3_go.webp",
    "audioEn": "P3_flashcards_audios/P3_go.mp3",
    "audioZh": "P3_flashcards_audios/P3_go_zh.mp3"
  },
  {
    "id": "goat",
    "word": "goat",
    "zh": "goat",
    "image": "P3_flashcards_images/P3_goat.webp",
    "audioEn": "P3_flashcards_audios/P3_goat.mp3",
    "audioZh": "P3_flashcards_audios/P3_goat_zh.mp3"
  },
  {
    "id": "green",
    "word": "green",
    "zh": "green",
    "image": "P3_flashcards_images/P3_green.webp",
    "audioEn": "P3_flashcards_audios/P3_green.mp3",
    "audioZh": "P3_flashcards_audios/P3_green_zh.mp3"
  },
  {
    "id": "he",
    "word": "he",
    "zh": "he",
    "image": "P3_flashcards_images/P3_he.webp",
    "audioEn": "P3_flashcards_audios/P3_he.mp3",
    "audioZh": "P3_flashcards_audios/P3_he_zh.mp3"
  },
  {
    "id": "hi",
    "word": "hi",
    "zh": "hi",
    "image": "P3_flashcards_images/P3_hi.webp",
    "audioEn": "P3_flashcards_audios/P3_hi.mp3",
    "audioZh": "P3_flashcards_audios/P3_hi_zh.mp3"
  },
  {
    "id": "high",
    "word": "high",
    "zh": "high",
    "image": "P3_flashcards_images/P3_high.webp",
    "audioEn": "P3_flashcards_audios/P3_high.mp3",
    "audioZh": "P3_flashcards_audios/P3_high_zh.mp3"
  },
  {
    "id": "honey",
    "word": "honey",
    "zh": "honey",
    "image": "P3_flashcards_images/P3_honey.webp",
    "audioEn": "P3_flashcards_audios/P3_honey.mp3",
    "audioZh": "P3_flashcards_audios/P3_honey_zh.mp3"
  },
  {
    "id": "ice",
    "word": "ice",
    "zh": "ice",
    "image": "P3_flashcards_images/P3_ice.webp",
    "audioEn": "P3_flashcards_audios/P3_ice.mp3",
    "audioZh": "P3_flashcards_audios/P3_ice_zh.mp3"
  },
  {
    "id": "island",
    "word": "island",
    "zh": "island",
    "image": "P3_flashcards_images/P3_island.webp",
    "audioEn": "P3_flashcards_audios/P3_island.mp3",
    "audioZh": "P3_flashcards_audios/P3_island_zh.mp3"
  },
  {
    "id": "lake",
    "word": "lake",
    "zh": "lake",
    "image": "P3_flashcards_images/P3_lake.webp",
    "audioEn": "P3_flashcards_audios/P3_lake.mp3",
    "audioZh": "P3_flashcards_audios/P3_lake_zh.mp3"
  },
  {
    "id": "leaf",
    "word": "leaf",
    "zh": "leaf",
    "image": "P3_flashcards_images/P3_leaf.webp",
    "audioEn": "P3_flashcards_audios/P3_leaf.mp3",
    "audioZh": "P3_flashcards_audios/P3_leaf_zh.mp3"
  },
  {
    "id": "library",
    "word": "library",
    "zh": "library",
    "image": "P3_flashcards_images/P3_library.webp",
    "audioEn": "P3_flashcards_audios/P3_library.mp3",
    "audioZh": "P3_flashcards_audios/P3_library_zh.mp3"
  },
  {
    "id": "lie",
    "word": "lie",
    "zh": "lie",
    "image": "P3_flashcards_images/P3_lie.webp",
    "audioEn": "P3_flashcards_audios/P3_lie.mp3",
    "audioZh": "P3_flashcards_audios/P3_lie_zh.mp3"
  },
  {
    "id": "light",
    "word": "light",
    "zh": "light",
    "image": "P3_flashcards_images/P3_light.webp",
    "audioEn": "P3_flashcards_audios/P3_light.mp3",
    "audioZh": "P3_flashcards_audios/P3_light_zh.mp3"
  },
  {
    "id": "like",
    "word": "like",
    "zh": "like",
    "image": "P3_flashcards_images/P3_like.webp",
    "audioEn": "P3_flashcards_audios/P3_like.mp3",
    "audioZh": "P3_flashcards_audios/P3_like_zh.mp3"
  },
  {
    "id": "line",
    "word": "line",
    "zh": "line",
    "image": "P3_flashcards_images/P3_line.webp",
    "audioEn": "P3_flashcards_audios/P3_line.mp3",
    "audioZh": "P3_flashcards_audios/P3_line_zh.mp3"
  },
  {
    "id": "listen",
    "word": "listen",
    "zh": "listen",
    "image": "P3_flashcards_images/P3_listen.webp",
    "audioEn": "P3_flashcards_audios/P3_listen.mp3",
    "audioZh": "P3_flashcards_audios/P3_listen_zh.mp3"
  },
  {
    "id": "look",
    "word": "look",
    "zh": "look",
    "image": "P3_flashcards_images/P3_look.webp",
    "audioEn": "P3_flashcards_audios/P3_look.mp3",
    "audioZh": "P3_flashcards_audios/P3_look_zh.mp3"
  },
  {
    "id": "love",
    "word": "love",
    "zh": "love",
    "image": "P3_flashcards_images/P3_love.webp",
    "audioEn": "P3_flashcards_audios/P3_love.mp3",
    "audioZh": "P3_flashcards_audios/P3_love_zh.mp3"
  },
  {
    "id": "low",
    "word": "low",
    "zh": "low",
    "image": "P3_flashcards_images/P3_low.webp",
    "audioEn": "P3_flashcards_audios/P3_low.mp3",
    "audioZh": "P3_flashcards_audios/P3_low_zh.mp3"
  },
  {
    "id": "mail",
    "word": "mail",
    "zh": "mail",
    "image": "P3_flashcards_images/P3_mail.webp",
    "audioEn": "P3_flashcards_audios/P3_mail.mp3",
    "audioZh": "P3_flashcards_audios/P3_mail_zh.mp3"
  },
  {
    "id": "male",
    "word": "male",
    "zh": "male",
    "image": "P3_flashcards_images/P3_male.webp",
    "audioEn": "P3_flashcards_audios/P3_male.mp3",
    "audioZh": "P3_flashcards_audios/P3_male_zh.mp3"
  },
  {
    "id": "me",
    "word": "me",
    "zh": "me",
    "image": "P3_flashcards_images/P3_me.webp",
    "audioEn": "P3_flashcards_audios/P3_me.mp3",
    "audioZh": "P3_flashcards_audios/P3_me_zh.mp3"
  },
  {
    "id": "meat",
    "word": "meat",
    "zh": "meat",
    "image": "P3_flashcards_images/P3_meat.webp",
    "audioEn": "P3_flashcards_audios/P3_meat.mp3",
    "audioZh": "P3_flashcards_audios/P3_meat_zh.mp3"
  },
  {
    "id": "might",
    "word": "might",
    "zh": "might",
    "image": "P3_flashcards_images/P3_might.webp",
    "audioEn": "P3_flashcards_audios/P3_might.mp3",
    "audioZh": "P3_flashcards_audios/P3_might_zh.mp3"
  },
  {
    "id": "money",
    "word": "money",
    "zh": "money",
    "image": "P3_flashcards_images/P3_money.webp",
    "audioEn": "P3_flashcards_audios/P3_money.mp3",
    "audioZh": "P3_flashcards_audios/P3_money_zh.mp3"
  },
  {
    "id": "name",
    "word": "name",
    "zh": "name",
    "image": "P3_flashcards_images/P3_name.webp",
    "audioEn": "P3_flashcards_audios/P3_name.mp3",
    "audioZh": "P3_flashcards_audios/P3_name_zh.mp3"
  },
  {
    "id": "net",
    "word": "net",
    "zh": "net",
    "image": "P3_flashcards_images/P3_net.webp",
    "audioEn": "P3_flashcards_audios/P3_net.mp3",
    "audioZh": "P3_flashcards_audios/P3_net_zh.mp3"
  },
  {
    "id": "night",
    "word": "night",
    "zh": "night",
    "image": "P3_flashcards_images/P3_night.webp",
    "audioEn": "P3_flashcards_audios/P3_night.mp3",
    "audioZh": "P3_flashcards_audios/P3_night_zh.mp3"
  },
  {
    "id": "no",
    "word": "no",
    "zh": "no",
    "image": "P3_flashcards_images/P3_no.webp",
    "audioEn": "P3_flashcards_audios/P3_no.mp3",
    "audioZh": "P3_flashcards_audios/P3_no_zh.mp3"
  },
  {
    "id": "nose",
    "word": "nose",
    "zh": "nose",
    "image": "P3_flashcards_images/P3_nose.webp",
    "audioEn": "P3_flashcards_audios/P3_nose.mp3",
    "audioZh": "P3_flashcards_audios/P3_nose_zh.mp3"
  },
  {
    "id": "number",
    "word": "number",
    "zh": "number",
    "image": "P3_flashcards_images/P3_number.webp",
    "audioEn": "P3_flashcards_audios/P3_number.mp3",
    "audioZh": "P3_flashcards_audios/P3_number_zh.mp3"
  },
  {
    "id": "old",
    "word": "old",
    "zh": "old",
    "image": "P3_flashcards_images/P3_old.webp",
    "audioEn": "P3_flashcards_audios/P3_old.mp3",
    "audioZh": "P3_flashcards_audios/P3_old_zh.mp3"
  },
  {
    "id": "right",
    "word": "right",
    "zh": "right",
    "image": "P3_flashcards_images/P3_right.webp",
    "audioEn": "P3_flashcards_audios/P3_right.mp3",
    "audioZh": "P3_flashcards_audios/P3_right_zh.mp3"
  },
  {
    "id": "rope",
    "word": "rope",
    "zh": "rope",
    "image": "P3_flashcards_images/P3_rope.webp",
    "audioEn": "P3_flashcards_audios/P3_rope.mp3",
    "audioZh": "P3_flashcards_audios/P3_rope_zh.mp3"
  },
  {
    "id": "rose",
    "word": "rose",
    "zh": "rose",
    "image": "P3_flashcards_images/P3_rose.webp",
    "audioEn": "P3_flashcards_audios/P3_rose.mp3",
    "audioZh": "P3_flashcards_audios/P3_rose_zh.mp3"
  },
  {
    "id": "scene",
    "word": "scene",
    "zh": "scene",
    "image": "P3_flashcards_images/P3_scene.webp",
    "audioEn": "P3_flashcards_audios/P3_scene.mp3",
    "audioZh": "P3_flashcards_audios/P3_scene_zh.mp3"
  },
  {
    "id": "she",
    "word": "she",
    "zh": "she",
    "image": "P3_flashcards_images/P3_she.webp",
    "audioEn": "P3_flashcards_audios/P3_she.mp3",
    "audioZh": "P3_flashcards_audios/P3_she_zh.mp3"
  },
  {
    "id": "sigh",
    "word": "sigh",
    "zh": "sigh",
    "image": "P3_flashcards_images/P3_sigh.webp",
    "audioEn": "P3_flashcards_audios/P3_sigh.mp3",
    "audioZh": "P3_flashcards_audios/P3_sigh_zh.mp3"
  },
  {
    "id": "teeth",
    "word": "teeth",
    "zh": "teeth",
    "image": "P3_flashcards_images/P3_teeth.webp",
    "audioEn": "P3_flashcards_audios/P3_teeth.mp3",
    "audioZh": "P3_flashcards_audios/P3_teeth_zh.mp3"
  },
  {
    "id": "these",
    "word": "these",
    "zh": "these",
    "image": "P3_flashcards_images/P3_these.webp",
    "audioEn": "P3_flashcards_audios/P3_these.mp3",
    "audioZh": "P3_flashcards_audios/P3_these_zh.mp3"
  },
  {
    "id": "time",
    "word": "time",
    "zh": "time",
    "image": "P3_flashcards_images/P3_time.webp",
    "audioEn": "P3_flashcards_audios/P3_time.mp3",
    "audioZh": "P3_flashcards_audios/P3_time_zh.mp3"
  },
  {
    "id": "toast",
    "word": "toast",
    "zh": "toast",
    "image": "P3_flashcards_images/P3_toast.webp",
    "audioEn": "P3_flashcards_audios/P3_toast.mp3",
    "audioZh": "P3_flashcards_audios/P3_toast_zh.mp3"
  },
  {
    "id": "tube",
    "word": "tube",
    "zh": "tube",
    "image": "P3_flashcards_images/P3_tube.webp",
    "audioEn": "P3_flashcards_audios/P3_tube.mp3",
    "audioZh": "P3_flashcards_audios/P3_tube_zh.mp3"
  },
  {
    "id": "tune",
    "word": "tune",
    "zh": "tune",
    "image": "P3_flashcards_images/P3_tune.webp",
    "audioEn": "P3_flashcards_audios/P3_tune.mp3",
    "audioZh": "P3_flashcards_audios/P3_tune_zh.mp3"
  },
  {
    "id": "we",
    "word": "we",
    "zh": "we",
    "image": "P3_flashcards_images/P3_we.webp",
    "audioEn": "P3_flashcards_audios/P3_we.mp3",
    "audioZh": "P3_flashcards_audios/P3_we_zh.mp3"
  },
  {
    "id": "yard",
    "word": "yard",
    "zh": "yard",
    "image": "P3_flashcards_images/P3_yard.webp",
    "audioEn": "P3_flashcards_audios/P3_yard.mp3",
    "audioZh": "P3_flashcards_audios/P3_yard_zh.mp3"
  },
  {
    "id": "yellow",
    "word": "yellow",
    "zh": "yellow",
    "image": "P3_flashcards_images/P3_yellow.webp",
    "audioEn": "P3_flashcards_audios/P3_yellow.mp3",
    "audioZh": "P3_flashcards_audios/P3_yellow_zh.mp3"
  },
  {
    "id": "yes",
    "word": "yes",
    "zh": "yes",
    "image": "P3_flashcards_images/P3_yes.webp",
    "audioEn": "P3_flashcards_audios/P3_yes.mp3",
    "audioZh": "P3_flashcards_audios/P3_yes_zh.mp3"
  },
  {
    "id": "yo-yo",
    "word": "yo-yo",
    "zh": "yo-yo",
    "image": "P3_flashcards_images/P3_yo-yo.webp",
    "audioEn": "P3_flashcards_audios/P3_yo-yo.mp3",
    "audioZh": "P3_flashcards_audios/P3_yo-yo_zh.mp3"
  },
  {
    "id": "you",
    "word": "you",
    "zh": "you",
    "image": "P3_flashcards_images/P3_you.webp",
    "audioEn": "P3_flashcards_audios/P3_you.mp3",
    "audioZh": "P3_flashcards_audios/P3_you_zh.mp3"
  },
  {
    "id": "yummy",
    "word": "yummy",
    "zh": "yummy",
    "image": "P3_flashcards_images/P3_yummy.webp",
    "audioEn": "P3_flashcards_audios/P3_yummy.mp3",
    "audioZh": "P3_flashcards_audios/P3_yummy_zh.mp3"
  }
];

// 自然發音/首音分組（對應課本 Page 04 - 12）
const PHONICS_GROUPS = {
  "Ll": [
    "like",
    "look",
    "love",
    "leaf",
    "library",
    "listen",
    "lake",
    "line"
  ],
  "Nn": [
    "no",
    "name",
    "nose",
    "night",
    "number",
    "net"
  ],
  "Yy": [
    "yes",
    "you",
    "yellow",
    "yard",
    "yummy",
    "yo-yo"
  ]
};

// 課文動作與問答情境題庫
const ANIMAL_ACTION_QUESTIONS = [
  {
    "subject": "Boy",
    "action": "eat",
    "sentence": "He can eat the sweet cake!",
    "question": "What can he eat?",
    "options": [
      "cake",
      "bike",
      "boat"
    ],
    "correct": "cake"
  },
  {
    "subject": "Girl",
    "action": "ride",
    "sentence": "She can ride her red bike.",
    "question": "What can she ride?",
    "options": [
      "bike",
      "leaf",
      "rose"
    ],
    "correct": "bike"
  },
  {
    "subject": "Child",
    "action": "play",
    "sentence": "We play a fun game together.",
    "question": "What do we play?",
    "options": [
      "game",
      "feet",
      "door"
    ],
    "correct": "game"
  },
  {
    "subject": "Goat",
    "action": "float",
    "sentence": "The boat can float on water.",
    "question": "What can the boat do?",
    "options": [
      "float",
      "eat",
      "dive"
    ],
    "correct": "float"
  },
  {
    "subject": "Duck",
    "action": "dive",
    "sentence": "He can dive into the cool lake.",
    "question": "What can he do?",
    "options": [
      "dive",
      "blow",
      "bake"
    ],
    "correct": "dive"
  }
];

// 全域掛載相容變數
if (typeof window !== "undefined") {
  window.P1_VOCABULARY = P3_VOCABULARY;
  window.P3_VOCABULARY = P3_VOCABULARY;
  window.PHONICS_GROUPS = PHONICS_GROUPS;
  window.ANIMAL_ACTION_QUESTIONS = ANIMAL_ACTION_QUESTIONS;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    P1_VOCABULARY: P3_VOCABULARY,
    P3_VOCABULARY,
    PHONICS_GROUPS,
    ANIMAL_ACTION_QUESTIONS
  };
}
