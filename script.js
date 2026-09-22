/* C9_VECTOR portfolio — Muhammad Umer. Vanilla JS + Three.js. No build step required to run. */
(() => {
'use strict';
/* ---------- Generated data: brand icon paths (Simple Icons, CC0) and a compact land bitmask for the globe ---------- */
const BRAND_ICONS = {"github":"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12","instagram":"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077","discord":"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z","whatsapp":"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z","tryhackme":"M10.705 0C7.54 0 4.902 2.285 4.349 5.291a4.525 4.525 0 0 0-4.107 4.5 4.525 4.525 0 0 0 4.52 4.52h6.761a.625.625 0 1 0 0-1.25H4.761a3.273 3.273 0 0 1-3.27-3.27A3.273 3.273 0 0 1 6.59 7.08a.625.625 0 0 0 .7-1.035 4.488 4.488 0 0 0-1.68-.69 5.223 5.223 0 0 1 5.096-4.104 5.221 5.221 0 0 1 5.174 4.57 4.489 4.489 0 0 0-.488.305.625.625 0 1 0 .731 1.013 3.245 3.245 0 0 1 1.912-.616 3.278 3.278 0 0 1 3.203 2.61.625.625 0 0 0 1.225-.251 4.533 4.533 0 0 0-4.428-3.61 4.54 4.54 0 0 0-.958.105C16.556 2.328 13.9 0 10.705 0zm5.192 10.64a.925.925 0 0 0-.462.108.913.913 0 0 0-.313.29 1.27 1.27 0 0 0-.175.427 2.39 2.39 0 0 0-.054.514c0 .181.018.353.054.517.036.164.095.307.175.43a.899.899 0 0 0 .313.297c.127.073.281.11.462.11.18 0 .334-.037.46-.11a.897.897 0 0 0 .309-.296c.08-.124.137-.267.173-.431.036-.164.054-.336.054-.517 0-.18-.018-.352-.054-.514a1.271 1.271 0 0 0-.173-.426.901.901 0 0 0-.309-.291.917.917 0 0 0-.46-.108zm6.486 0a.925.925 0 0 0-.462.108.913.913 0 0 0-.313.29 1.27 1.27 0 0 0-.175.427 2.39 2.39 0 0 0-.053.514c0 .181.017.353.053.517.036.164.095.307.175.43a.899.899 0 0 0 .313.297c.127.073.281.11.462.11.18 0 .334-.037.46-.11a.897.897 0 0 0 .31-.296c.078-.124.136-.267.172-.431.036-.164.054-.336.054-.517 0-.18-.018-.352-.054-.514a1.271 1.271 0 0 0-.173-.426.901.901 0 0 0-.308-.291.916.916 0 0 0-.461-.108zm-8.537.068l-.84.618.313.43.476-.368v1.877h.603v-2.557zm6.486 0l-.841.618.314.43.477-.368v1.877h.603v-2.557zm-4.435.445c.08 0 .143.028.193.084.05.057.087.127.114.21.026.083.044.173.054.269a2.541 2.541 0 0 1 0 .533c-.01.097-.028.187-.054.27a.584.584 0 0 1-.114.21.243.243 0 0 1-.193.085.248.248 0 0 1-.195-.086.584.584 0 0 1-.118-.209 1.245 1.245 0 0 1-.056-.27 2.645 2.645 0 0 1 0-.533c.01-.096.029-.186.056-.27a.583.583 0 0 1 .118-.209.25.25 0 0 1 .195-.084zm6.486 0c.08 0 .144.028.193.084.05.057.087.127.114.21.027.083.044.173.054.269a2.541 2.541 0 0 1 0 .533c-.01.097-.027.187-.054.27a.584.584 0 0 1-.114.21.243.243 0 0 1-.193.085.249.249 0 0 1-.195-.086.581.581 0 0 1-.117-.209 1.245 1.245 0 0 1-.056-.27 2.642 2.642 0 0 1 0-.533c.01-.096.028-.186.056-.27a.58.58 0 0 1 .117-.209.25.25 0 0 1 .195-.084zm-2.191 3.51a.93.93 0 0 0-.463.109.908.908 0 0 0-.312.291c-.08.122-.139.263-.175.426a2.383 2.383 0 0 0-.054.514c0 .18.018.353.054.516.036.164.094.308.175.432a.91.91 0 0 0 .312.296.92.92 0 0 0 .463.11c.18 0 .333-.037.46-.11a.892.892 0 0 0 .308-.296 1.32 1.32 0 0 0 .174-.432c.036-.163.054-.335.054-.516 0-.18-.018-.352-.054-.514a1.274 1.274 0 0 0-.174-.426.89.89 0 0 0-.309-.291.918.918 0 0 0-.46-.108zm-6.402.07l-.841.617.314.43.476-.369v1.878h.604v-2.557zm2.125 0l-.841.617.314.43.477-.369v1.878h.603v-2.557zm2.116 0l-.84.617.313.43.477-.369v1.878h.603v-2.557zm2.16.443c.08 0 .144.028.194.085a.605.605 0 0 1 .114.21c.026.083.044.172.053.269a2.639 2.639 0 0 1 0 .532 1.28 1.28 0 0 1-.053.27.585.585 0 0 1-.114.21.244.244 0 0 1-.193.085.25.25 0 0 1-.196-.085.589.589 0 0 1-.117-.21 1.245 1.245 0 0 1-.056-.27 2.597 2.597 0 0 1 0-.532c.01-.097.028-.186.056-.27a.589.589 0 0 1 .117-.209.249.249 0 0 1 .196-.085zm-6.729 3.073a.676.676 0 0 0-.335.078.661.661 0 0 0-.227.211.91.91 0 0 0-.127.31c-.027.118-.04.242-.04.373s.013.256.04.375a.93.93 0 0 0 .127.313.65.65 0 0 0 .227.215c.092.053.204.08.335.08a.655.655 0 0 0 .334-.08.65.65 0 0 0 .225-.215c.057-.09.1-.194.125-.313a1.75 1.75 0 0 0 .04-.375c0-.13-.014-.255-.04-.373a.931.931 0 0 0-.125-.31.658.658 0 0 0-.225-.21.667.667 0 0 0-.334-.08zm3.086 0a.675.675 0 0 0-.336.078.661.661 0 0 0-.226.211.907.907 0 0 0-.127.31 1.69 1.69 0 0 0-.04.373c0 .131.013.256.04.375a.928.928 0 0 0 .127.313c.058.09.134.162.226.215.093.053.205.08.336.08a.655.655 0 0 0 .334-.08.65.65 0 0 0 .224-.215c.058-.09.1-.194.126-.313a1.752 1.752 0 0 0 0-.748.94.94 0 0 0-.126-.31.657.657 0 0 0-.224-.21.667.667 0 0 0-.334-.08zm5.108 0a.675.675 0 0 0-.336.078.661.661 0 0 0-.226.211.91.91 0 0 0-.127.31c-.027.118-.04.242-.04.373s.013.256.04.375a.931.931 0 0 0 .127.313c.058.09.134.162.226.215.093.053.205.08.336.08.13 0 .243-.027.334-.08a.65.65 0 0 0 .224-.215c.058-.09.1-.194.126-.313a1.75 1.75 0 0 0 .04-.375c0-.13-.014-.255-.04-.373a.943.943 0 0 0-.126-.31.657.657 0 0 0-.224-.21.668.668 0 0 0-.334-.08zm-6.658.05l-.61.448.227.311.346-.266v1.362h.438v-1.856zm3.068 0l-.61.448.227.311.346-.266v1.362h.438v-1.856zm5.108 0l-.611.448.228.311.346-.266v1.362h.438v-1.856zm-9.712.322c.058 0 .105.02.14.062a.421.421 0 0 1 .083.151.96.96 0 0 1 .04.196 1.932 1.932 0 0 1 0 .386.954.954 0 0 1-.04.197.421.421 0 0 1-.083.152.176.176 0 0 1-.14.061.18.18 0 0 1-.141-.06.427.427 0 0 1-.085-.153.887.887 0 0 1-.041-.197 1.96 1.96 0 0 1 0-.386.893.893 0 0 1 .04-.196.42.42 0 0 1 .086-.151.181.181 0 0 1 .141-.062zm3.086 0c.058 0 .104.02.14.062a.421.421 0 0 1 .082.151.94.94 0 0 1 .04.196 1.906 1.906 0 0 1 0 .386.93.93 0 0 1-.04.197.421.421 0 0 1-.082.152.176.176 0 0 1-.14.061.18.18 0 0 1-.141-.06.42.42 0 0 1-.086-.153.846.846 0 0 1-.04-.197 1.965 1.965 0 0 1-.011-.195c0-.057.004-.121.01-.191a.849.849 0 0 1 .041-.196.42.42 0 0 1 .086-.151.182.182 0 0 1 .141-.062zm5.108 0c.058 0 .104.02.14.062a.421.421 0 0 1 .082.151.92.92 0 0 1 .04.196 1.963 1.963 0 0 1 0 .386.943.943 0 0 1-.04.197.421.421 0 0 1-.082.152.177.177 0 0 1-.14.061.18.18 0 0 1-.142-.06.437.437 0 0 1-.085-.153.95.95 0 0 1-.04-.197 1.965 1.965 0 0 1-.011-.195c0-.057.004-.121.01-.191a.959.959 0 0 1 .04-.196.47.47 0 0 1 .086-.151.181.181 0 0 1 .142-.062zm-1.684 1.814a.675.675 0 0 0-.336.079.66.66 0 0 0-.227.21.91.91 0 0 0-.127.31 1.731 1.731 0 0 0 0 .748.939.939 0 0 0 .127.314c.059.09.134.162.227.215.093.053.205.08.336.08a.66.66 0 0 0 .334-.08.648.648 0 0 0 .224-.215c.058-.09.1-.195.126-.314a1.737 1.737 0 0 0-.001-.747.928.928 0 0 0-.125-.31.65.65 0 0 0-.224-.211.668.668 0 0 0-.334-.079zm3.063 0a.676.676 0 0 0-.336.079.664.664 0 0 0-.227.21.906.906 0 0 0-.127.31 1.74 1.74 0 0 0 0 .748.936.936 0 0 0 .127.314.66.66 0 0 0 .227.215c.092.053.204.08.336.08a.654.654 0 0 0 .334-.08.648.648 0 0 0 .223-.215c.058-.09.1-.195.126-.314a1.74 1.74 0 0 0 0-.747.928.928 0 0 0-.126-.31.65.65 0 0 0-.223-.211.666.666 0 0 0-.334-.079zm-1.545.05l-.611.448.228.312.346-.267v1.363h.438v-1.856zm-1.518.323c.057 0 .104.02.14.061a.42.42 0 0 1 .082.152.91.91 0 0 1 .04.195 1.966 1.966 0 0 1 0 .387.951.951 0 0 1-.04.197.421.421 0 0 1-.082.152.177.177 0 0 1-.14.06.18.18 0 0 1-.142-.06.428.428 0 0 1-.085-.152.914.914 0 0 1-.04-.197 1.96 1.96 0 0 1-.011-.195c0-.058.003-.122.01-.192a.923.923 0 0 1 .041-.195c.02-.06.048-.11.085-.152a.181.181 0 0 1 .142-.061zm3.063 0c.057 0 .104.02.14.061a.42.42 0 0 1 .082.152.94.94 0 0 1 .04.195 1.91 1.91 0 0 1 0 .387.93.93 0 0 1-.04.197.422.422 0 0 1-.083.152.175.175 0 0 1-.14.06.18.18 0 0 1-.141-.06.423.423 0 0 1-.085-.152.907.907 0 0 1-.04-.197 1.95 1.95 0 0 1 0-.387.915.915 0 0 1 .04-.195c.02-.06.048-.11.085-.152a.182.182 0 0 1 .142-.061zm-9.713.185a.465.465 0 0 0-.232.055.456.456 0 0 0-.157.146.627.627 0 0 0-.089.215 1.168 1.168 0 0 0-.027.259c0 .09.009.177.027.26a.648.648 0 0 0 .089.216c.04.063.093.112.157.149a.459.459 0 0 0 .232.056c.09 0 .168-.02.231-.056a.45.45 0 0 0 .156-.149.67.67 0 0 0 .087-.217 1.218 1.218 0 0 0 0-.518.647.647 0 0 0-.087-.215.448.448 0 0 0-.156-.146.458.458 0 0 0-.23-.055zm1.052.035l-.423.31.158.217.24-.185v.944h.303v-1.286zm-1.052.224c.04 0 .073.014.097.042a.284.284 0 0 1 .057.105.69.69 0 0 1 .028.136c.004.049.007.092.007.133 0 .04-.003.086-.007.135a.684.684 0 0 1-.028.136.285.285 0 0 1-.057.105.123.123 0 0 1-.097.043.125.125 0 0 1-.098-.043.298.298 0 0 1-.059-.105.612.612 0 0 1-.028-.136 1.39 1.39 0 0 1 0-.268.62.62 0 0 1 .028-.136.297.297 0 0 1 .06-.105.125.125 0 0 1 .097-.042zm3.775 1.394a.463.463 0 0 0-.232.054.452.452 0 0 0-.157.146.621.621 0 0 0-.088.214 1.19 1.19 0 0 0 0 .519.641.641 0 0 0 .088.217.46.46 0 0 0 .157.15.458.458 0 0 0 .232.054.454.454 0 0 0 .232-.055.45.45 0 0 0 .155-.149.664.664 0 0 0 .087-.217 1.189 1.189 0 0 0 0-.519.642.642 0 0 0-.087-.214.446.446 0 0 0-.155-.146.459.459 0 0 0-.232-.054zm1.052.034l-.423.31.158.216.24-.185v.945h.303V22.68zm-1.052.223c.04 0 .073.014.098.043a.3.3 0 0 1 .057.105.643.643 0 0 1 .027.135 1.31 1.31 0 0 1 0 .268.654.654 0 0 1-.027.137.307.307 0 0 1-.057.105.124.124 0 0 1-.098.042.125.125 0 0 1-.098-.042.293.293 0 0 1-.059-.105.618.618 0 0 1-.028-.137 1.364 1.364 0 0 1 0-.268.612.612 0 0 1 .028-.135.287.287 0 0 1 .06-.105.123.123 0 0 1 .097-.043z","linktree":"m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z"};
const GLOBE_MASK = {"step":1.5,"w":240,"h":120,"land":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPj/z////3EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/++f///wcAAPADgAEAAOADAAAAAAAAAAAAAAAg3N4f/v///wcAAB8AAAAAAAA4AAAAAAAAAAAAAAADAOAH/P///wcAAA4AAAAAAAAwAAAAAAAAAAAAAAC8cQwBAP///wcAAAAAAIAHAMD/DwDwAAAAAAAAAOAAAAAAAPz//wMAAAAAAGAAAPz/AQAAAAAAAAAAAOBdc/MDAPj//wEAAAAAABjAwP///z9gAAAAA4AAAED8A/P/AOD//wEAAAAAADjg/v///z//HwCAAPj/A0/8X4PwB/D//wAAAOA/AADh/v///////wM+A/7///8Pw56BB+D/DwAAAPz/Y+zf/f//////////N/D///////+Bf/D/AQAAAP7/x////v//////////GP7//////7/wJ+AfAH4AAD9++P//////////////AOD//////88GH8AfAAwAwJ////////////////9/APz//////wNxDIAPAAAA8M///////////////98/APzf/////wHwAwAGAAAA+M///////////////+ADAPAB+P///wHwMwAAAAAA8A//////////////ZBgAAIACgP///wPgfwAAAAAQAAf///////////8fAA4AACAAAP///z/gfwAAAAAwYMf///////////8PAB8AAAQAAP7////5/wMAAABoQOj///////////8DAA8AAAAAgPz////5/wcAAADs+P////////////9/AAcAAAAAAPj////7/wMAAADg+f////////////9/AAEAAAAAAPj/////zwAAAAAw/v////////////+/AAAAAAAAAPD/////Gw4AAACg//////////////8fAAAAAAAAAOD/////HxAAAADA//////////////8fAAAAAAAAAOD//////wAAAACA//9P/vj///////8PAAAAAAAAAOD/////EwAAAACA//wHfPz////////HAAAAAAAAAOD/////AQAAAAD8g/EH8Pj////////gAAAAAAAAAOD/////AAAAAAD8Aebn+fH//////z8AAAAAAAAAAOD///9/AAAAAAD8AGT8//H//////xpgAAAAAAAAAMD///8/AAAAAAD8AMT8//H/////fzggAAAAAAAAAID///8fAAAAAABwdAD8/////////zE4AAAAAAAAAID///8fAAAAAACwfwBD/////////zA/AAAAAAAAAAD+//8PAAAAAAD4fwAA/////////wAHAAAAAAAAAAD8//8DAAAAAAD8/2OA/////////4EAAAAAAAAAAADo//8DAAAAAAD8/+///////////wEAAAAAAAAAAADo/wkCAAAAAAD+//////z//////wEAAAAAAAAAAADYfwACAAAAAID///8///n//////wEAAAAAAAAAAACgfwAWAAAAAMD///9//+H//////wAAAAAAAAAAAAAgfwAAAAAAAMD///9//jPg////fwAAAAAAAAAAAAAAfgAAAAAAAOD//////H/A////PwEAAAAAAAAAAAAAfAAIAAAAAOD//////f/A/+f/BwAAAAAAAAAAAAAAfDBwAAAAAOD/////+X8A/sN/AAAAAAAAAAAAAAAA+DgAAwAAAOD/////+T8A/oB/AwAAAAAAAAAAAAAA4B8AAAAAAOD/////8x8AfoB/AAMAAAAAAAAAAAAAgPwAAAAAAOD/////8wcAPoD+AAEAAAAAAAAAAAAAAPgBAAAAAOD/////7wEAHAD+AQEAAAAAAAAAAAAAAMAAAAAAAOD/////PwAAHAD8AQQAAAAAAAAAAAAAAICAAgAAAMD/////HwMAGADgAAoAAAAAAAAAAAAAAADBfgAAAID//////wMAGABAAAAAAAAAAAAAAAAAAADy/wAAAID//////wEAIAAGAAwAAAAAAAAAAAAAAADw/wEAAAD//////wEAIAAIAAgAAAAAAAAAAAAAAADw/x8AAAD8+P///wAAAAAZYAAAAAAAAAAAAAAAAADg/z8AAAAAwP///wAAAAAbMAAAAAAAAAAAAAAAAADw/z8AAAAAwP//fwAAAAAWfAAAAAAAAAAAAAAAAAD4/38AAAAAwP//HwAAAAAcficAAAAAAAAAAAAAAAD8//8BAAAAwP//DwAAAAAYPiABAAAAAAAAAAAAAAD8//8DAAAAwP//BwAAAAA4vgEaAAAAAAAAAAAAAAD8//8/AAAAgP//BwAAAABwEBL+AAAAAAAAAAAAAAD8////AAAAAP//AwAAAABgAADwAQAAAAAAAAAAAAD8////AQAAAP//AwAAAADABADyAwEAAAAAAAAAAAD4////AQAAAP7/AwAAAAAAHADwBgQAAAAAAAAAAADw////AAAAAP7/BwAAAAAAAAQADAAAAAAAAAAAAADw//9/AAAAAP7/BwAAAAAAAAAAAAAAAAAAAAAAAADg//9/AAAAAP7/BwAAAAAAAICHAAAAAAAAAAAAAADg//8/AAAAAP//BwEAAAAAANDHAAAAAAAAAAAAAADA//8/AAAAAP//hwMAAAAAAPjHAQAAAAAAAAAAAAAA//8/AAAAAP//4QEAAAAAAPzfAQAAAAAAAAAAAAAA/v8/AAAAAP//4AEAAAAAAP7/AwAAAAAAAAAAAAAA/v8fAAAAAP5/wAAAAAAAgP//ByAAAAAAAAAAAAAA/v8fAAAAAP7/4AAAAAAA4P//D0AAAAAAAAAAAAAA/v8HAAAAAPz/4AAAAAAA8P//HwAAAAAAAAAAAAAA/v8AAAAAAPx/YAAAAAAA8P//PwAAAAAAAAAAAAAA/v8AAAAAAPw/AAAAAAAA8P//PwAAAAAAAAAAAAAA/v8AAAAAAPw/AAAAAAAA8P//PwAAAAAAAAAAAAAA/38AAAAAAPgfAAAAAAAA4P//PwAAAAAAAAAAAAAA/z8AAAAAAPAPAAAAAAAA4P//PwAAAAAAAAAAAAAA/x8AAAAAAPAHAAAAAAAA4B/+PwAAAAAAAAAAAAAA/w8AAAAAAPABAAAAAAAA4Af0HwAAAAAAAAAAAAAA/wMAAAAAAAAAAAAAAAAAAADwDwAIAAAAAAAAAACA/wMAAAAAAAAAAAAAAAAAAADgDwAQAAAAAAAAAACA/wEAAAAAAAAAAAAAAAAAAADAAgBwAAAAAAAAAACAfwAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAACAHwAAAAAAAAAAAAAAAAAAAAAABgAQAAAAAAAAAACAHwAAAAAAAAAAAAAAAAAAAAAABgAMAAAAAAAAAADADwAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAADABwAAAAAAAAAAAAAAAAAAAAAAAIADAAAAAAAAAADADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAgwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAADwAAAR4Pv4HAAAAAAAAAAAAAAAACAAAAAAAAAAA4P8/4P//////BwAAAAAAAAAAAAAAPwAAAAAAAADg//8//P///////wMAAAAAAAAAAACAewAAAADI/v////8///////////8BAAAAAAAAABAAeAAAAID///////////////////8DAAAAAAAe4P//fwAAAMD//////////////////38AAADA////////BwAAAPz//////////////////x8AAEDz//////8/AAAA8P///////////////////x8AABj///////8PAIAH/////////////////////38AAADA//////8/gPAD4P///////////////////wcAAAD+////////P4Dx/////////////////////w8AAAD8//////////////////////////////////8A/wMA/v//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////","pak":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"};


/* ================================================================
   Utilities
   ================================================================ */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
const mqCoarse = window.matchMedia('(pointer: coarse)');
const mqFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const reduceMotion = () => mqReduce.matches;
const isMobile = () => window.innerWidth < 768 || mqCoarse.matches;

/** Rendering budget picked once per load; heavy effects scale down on small / low-power devices. */
const PERF = {
  get mobile() { return isMobile(); },
  get dpr() { return Math.min(window.devicePixelRatio || 1, isMobile() ? 1.5 : 2); },
  get bgParticles() { return reduceMotion() ? 0 : (isMobile() ? 26 : 70); },
  get coreParticles() { return isMobile() ? 160 : 480; },
  get globeStride() { return isMobile() ? 2 : 1; },
  cores: navigator.hardwareConcurrency || 4
};

/** Throttle a function to at most once per animation frame. */
function rafThrottle(fn) {
  let queued = false, lastArgs;
  return (...args) => {
    lastArgs = args;
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; fn(...lastArgs); });
  };
}
function debounce(fn, ms) {
  let t;
  return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
}

/** Only ever allow http(s) and mailto links to reach an href. */
function safeUrl(value) {
  if (typeof value !== 'string' || !value.trim()) return '';
  try {
    const u = new URL(value.trim(), window.location.href);
    return ['http:', 'https:', 'mailto:'].includes(u.protocol) ? u.href : '';
  } catch { return ''; }
}

/**
 * Build DOM safely. All text goes through textContent / text nodes, never innerHTML,
 * so repository descriptions from GitHub can never inject markup.
 */
function el(tag, props, ...kids) {
  const node = document.createElement(tag);
  if (props) {
    for (const [k, v] of Object.entries(props)) {
      if (v == null || v === false) continue;
      if (k === 'class') node.className = v;
      else if (k === 'text') node.textContent = v;
      else if (k === 'dataset') Object.assign(node.dataset, v);
      else if (k === 'style') { for (const [sk, sv] of Object.entries(v)) (sk.startsWith('--') ? node.style.setProperty(sk, sv) : (node.style[sk] = sv)); }
      else if (k === 'href' || k === 'src') { const u = safeUrl(v); if (u) node.setAttribute(k, u); }
      else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v === true ? '' : v);
    }
  }
  for (const kid of kids.flat()) {
    if (kid == null || kid === false) continue;
    node.append(kid instanceof Node ? kid : document.createTextNode(String(kid)));
  }
  return node;
}
function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); return node; }

/* ---------- Icons ---------- */
const SVG_NS = 'http://www.w3.org/2000/svg';
function svgEl(name, attrs = {}) {
  const n = document.createElementNS(SVG_NS, name);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  return n;
}
function brandIcon(name) {
  const svg = svgEl('svg', { viewBox: '0 0 24 24', class: 'ico ico-brand', 'aria-hidden': 'true', focusable: 'false' });
  svg.append(svgEl('path', { d: BRAND_ICONS[name] || '' }));
  return svg;
}
const UI_ICONS = {
  star: [['path', { d: 'M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9l-5.2 2.8 1-5.9L3.5 9.7l5.9-.8L12 3.5z' }]],
  fork: [['circle', { cx: 6, cy: 5, r: 2 }], ['circle', { cx: 18, cy: 5, r: 2 }], ['circle', { cx: 12, cy: 19, r: 2 }], ['path', { d: 'M6 7v1a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7M12 11v6' }]],
  external: [['path', { d: 'M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5' }]],
  code: [['path', { d: 'M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14' }]],
  book: [['path', { d: 'M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4zM5 17a3 3 0 0 1 3-3h11' }]],
  play: [['path', { d: 'M7 4.5v15l12-7.5-12-7.5z' }]],
  mail: [['rect', { x: 3, y: 5, width: 18, height: 14, rx: 2 }], ['path', { d: 'm4 7 8 6 8-6' }]]
};
function uiIcon(name) {
  const svg = svgEl('svg', { viewBox: '0 0 24 24', class: 'ico ico-stroke', 'aria-hidden': 'true', focusable: 'false' });
  for (const [tag, attrs] of UI_ICONS[name] || []) svg.append(svgEl(tag, attrs));
  return svg;
}

/* ---------- Formatting ---------- */
const nf = new Intl.NumberFormat('en');
function fmtDate(iso) {
  const d = new Date(iso);
  return isNaN(d) ? 'Not available' : d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
}
function relTime(input) {
  const t = typeof input === 'number' ? input : new Date(input).getTime();
  if (!t || isNaN(t)) return 'Not available';
  const s = Math.max(0, Math.round((Date.now() - t) / 1000));
  if (s < 45) return 'just now';
  const m = Math.round(s / 60);  if (m < 60) return `${m} min ago`;
  const h = Math.round(m / 60);  if (h < 24) return `${h} h ago`;
  const d = Math.round(h / 24);  if (d < 30) return d === 1 ? 'yesterday' : `${d} days ago`;
  const mo = Math.round(d / 30); if (mo < 12) return `${mo} mo ago`;
  const y = Math.round(mo / 12); return `${y} y ago`;
}
const LANG_COLORS = {
  Python: '#3572A5', JavaScript: '#f1e05a', TypeScript: '#3178c6', HTML: '#e34c26', CSS: '#7a5ac8',
  Shell: '#89e051', C: '#8a8a8a', 'C++': '#f34b7d', 'C#': '#5aa02c', Go: '#00ADD8', Rust: '#dea584',
  Java: '#b07219', PHP: '#7a86b8', Ruby: '#c0392b', PowerShell: '#3d6fa3', Batchfile: '#C1F12E', Lua: '#5a6fd6'
};
const langColor = (l) => LANG_COLORS[l] || '#8A9A90';

/** Tiny observable used to share GitHub sync state between components. */
function createStore(initial) {
  let state = initial; const subs = new Set();
  return {
    get: () => state,
    set(patch) { state = { ...state, ...patch }; subs.forEach((fn) => fn(state)); },
    subscribe(fn) { subs.add(fn); fn(state); return () => subs.delete(fn); }
  };
}

/** Run `fn` the first time `node` scrolls near the viewport. */
function onceVisible(node, fn, margin = '160px') {
  if (!node) return;
  if (!('IntersectionObserver' in window)) { fn(); return; }
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) { io.disconnect(); fn(); }
  }, { rootMargin: margin });
  io.observe(node);
}
/** Keep `onChange(isVisible)` informed while `node` enters / leaves the viewport. */
function watchVisible(node, onChange, margin = '0px') {
  if (!('IntersectionObserver' in window)) { onChange(true); return; }
  new IntersectionObserver((es) => onChange(es[es.length - 1].isIntersecting), { rootMargin: margin }).observe(node);
}


/* ================================================================
   Core UI: cursor, navigation, reveal, 3D tilt, background particles
   ================================================================ */

/* ---------- Custom cursor (fine pointers only) ---------- */
function initCursor() {
  const dot = $('#cursor-dot'), ring = $('#cursor-ring');
  if (!dot || !ring || !mqFinePointer.matches || reduceMotion()) return;
  let x = -100, y = -100, rx = -100, ry = -100, active = false, running = false;

  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    x = e.clientX; y = e.clientY;
    if (!active) { active = true; rx = x; ry = y; document.documentElement.classList.add('has-cursor'); }
    dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    if (!running) { running = true; requestAnimationFrame(loop); }
  }, { passive: true });

  function loop() {
    rx = lerp(rx, x, 0.22); ry = lerp(ry, y, 0.22);
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
    if (Math.abs(rx - x) + Math.abs(ry - y) > 0.3) requestAnimationFrame(loop); else running = false;
  }

  document.addEventListener('pointerover', (e) => {
    const t = e.target instanceof Element ? e.target : null;
    if (!t) return;
    const isLink = t.closest('a, .icon-btn, .modal-close');
    const isView = !isLink && t.closest('[data-cursor="view"]');
    const isOther = t.closest('button, input, label, [role="button"], .sk-node, canvas, summary');
    ring.classList.toggle('is-view', !!isView);
    ring.classList.toggle('is-link', !isView && !!(isLink || isOther));
  }, { passive: true });
  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = ''; ring.style.opacity = ''; });
}

/* ---------- Navigation ---------- */
function initNav() {
  const nav = $('#nav'), toggle = $('#nav-toggle'), menu = $('#nav-menu'), ind = $('#nav-indicator');
  const links = $$('a[data-nav]', menu);
  links.forEach((a, i) => a.parentElement.style.setProperty('--i', i));
  let activeKey = 'home';

  const onScroll = rafThrottle(() => nav.classList.toggle('is-scrolled', window.scrollY > 24));
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function moveIndicator() {
    const a = links.find((l) => l.dataset.nav === activeKey);
    if (!a || getComputedStyle(toggle).display !== 'none') { ind.style.opacity = '0'; return; }
    const n = nav.getBoundingClientRect(), r = a.getBoundingClientRect();
    ind.style.width = `${r.width - 24}px`;
    ind.style.transform = `translateX(${r.left - n.left + 12}px)`;
    ind.style.opacity = '1';
  }
  function setActive(key) {
    activeKey = key;
    links.forEach((l) => { const on = l.dataset.nav === key; l.classList.toggle('is-active', on); on ? l.setAttribute('aria-current', 'true') : l.removeAttribute('aria-current'); });
    moveIndicator();
  }
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.dataset.navSection); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('[data-nav-section]').forEach((s) => io.observe(s));
  }
  window.addEventListener('resize', debounce(moveIndicator, 120));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveIndicator);
  setActive('home');

  const setOpen = (open) => {
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  links.forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('is-open')) { setOpen(false); toggle.focus(); } });
  document.addEventListener('click', (e) => { if (menu.classList.contains('is-open') && !nav.contains(e.target)) setOpen(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) setOpen(false); });
}

/* ---------- Scroll reveal ---------- */
function initReveal(root = document) {
  const items = $$('[data-reveal]:not(.is-in)', root);
  if (!items.length) return;
  if (!('IntersectionObserver' in window) || reduceMotion()) { items.forEach((n) => n.classList.add('is-in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  items.forEach((n) => io.observe(n));
}

/* ---------- 3D tilt (mouse only; throttled to one update per frame) ---------- */
function attachTilt(node, opts = {}) {
  if (reduceMotion() || !mqFinePointer.matches) return;
  const max = opts.max ?? 9, lift = opts.lift ?? 18, persp = opts.perspective ?? 1000;
  const rest = `perspective(${persp}px) rotateX(0deg) rotateY(0deg) translateZ(0)`;
  let rect = null;
  const base = 'border-color .3s, box-shadow .3s';

  const apply = rafThrottle((e) => {
    if (!rect) return;
    const px = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    const py = clamp((e.clientY - rect.top) / rect.height, 0, 1);
    node.style.transform = `perspective(${persp}px) rotateX(${((0.5 - py) * max * 2).toFixed(2)}deg) rotateY(${((px - 0.5) * max * 2).toFixed(2)}deg) translateZ(${lift}px)`;
    node.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
    node.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
  });
  node.addEventListener('pointerenter', (e) => {
    if (e.pointerType !== 'mouse') return;
    rect = node.getBoundingClientRect();
    node.style.transition = `transform .12s ease-out, ${base}`;
  });
  node.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse') apply(e); });
  node.addEventListener('pointerleave', () => {
    rect = null;
    node.style.transition = `transform .7s cubic-bezier(.2,.7,.2,1), ${base}`;
    node.style.transform = rest;
  });
}
function initTilt(root = document) {
  $$('[data-tilt]:not([data-tilt-ready])', root).forEach((n) => { n.dataset.tiltReady = '1'; attachTilt(n); });
  $$('[data-tilt-soft]:not([data-tilt-ready])', root).forEach((n) => { n.dataset.tiltReady = '1'; attachTilt(n, { max: 3, lift: 0 }); });
}

/* ---------- Background: drifting particles with faint links ---------- */
function initBackground() {
  const canvas = $('#fx-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = 0, h = 0, dpr = 1, pts = [], running = false, visible = true;

  function resize() {
    dpr = PERF.dpr; w = window.innerWidth; h = window.innerHeight;
    canvas.width = Math.floor(w * dpr); canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = PERF.bgParticles;
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.18, vy: (Math.random() - 0.5) * 0.18, r: Math.random() * 1.1 + 0.4
    }));
    draw(false);
  }
  function draw(step = true) {
    ctx.clearRect(0, 0, w, h);
    const link = isMobile() ? 100 : 140;
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      if (step) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1; }
      ctx.fillStyle = 'rgba(0,255,65,.65)';
      ctx.fillRect(p.x, p.y, p.r, p.r);
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d2 = dx * dx + dy * dy;
        if (d2 < link * link) {
          ctx.strokeStyle = `rgba(0,255,65,${(0.13 * (1 - Math.sqrt(d2) / link)).toFixed(3)})`;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
    }
  }
  function loop() {
    if (!running) return;
    draw(true);
    requestAnimationFrame(loop);
  }
  function start() { if (running || reduceMotion() || !visible || document.hidden) return; running = true; requestAnimationFrame(loop); }
  function stop() { running = false; }

  resize();
  window.addEventListener('resize', debounce(resize, 200));
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  start();
}


/* ================================================================
   Hero: 3D security core (Three.js) + 2D fallback
   Core = graphite icosahedron (detection engine) inside a node shell
   (network), circled by three orbit rings and a slow scan plane.
   Blue nodes = blue team, red nodes = red team.
   ================================================================ */

function makeGlowTexture(inner, outer) {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'), grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, inner); grad.addColorStop(0.35, outer); grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad; g.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c); return tex;
}
function makeDotTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d'), grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)'); grad.addColorStop(0.45, 'rgba(255,255,255,.9)'); grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

function webglAvailable() {
  try {
    if (!window.THREE) return false;
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch { return false; }
}

async function initHero() {
  const hero = $('#home'), canvas3d = $('#hero-canvas'), canvas2d = $('#hero-2d'), host = $('#hero-labels');
  clear(host);
  const labels = CONFIG.heroLabels.map((t) => host.appendChild(el('span', { class: 'hero-label', text: t })));
  const n = labels.length;
  const still = reduceMotion();

  const pointer = { x: 0, y: 0 };
  window.addEventListener('pointermove', rafThrottle((e) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
  }), { passive: true });

  let heroVisible = true;
  watchVisible(hero, (v) => { heroVisible = v; });

  /* label geometry shared by WebGL and 2D paths */
  const orbitAngle = (i, t) => (i / n) * Math.PI * 2 + t * 0.12;
  const orbitY = (i) => Math.sin(i * 2.1) * 0.9;

  function fallback2D() {
    document.documentElement.classList.add('no-webgl');
    canvas3d.hidden = true; canvas2d.hidden = false;
    const ctx = canvas2d.getContext('2d');
    let w = 0, h = 0, dpr = 1, running = false, t = 0;
    const N = isMobile() ? 130 : 260;
    const pts = [];
    const ga = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), a = i * ga;
      pts.push({ x: Math.cos(a) * r, y, z: Math.sin(a) * r });
    }
    const edges = [];
    pts.forEach((p, i) => {
      const near = pts.map((q, j) => ({ j, d: (p.x - q.x) ** 2 + (p.y - q.y) ** 2 + (p.z - q.z) ** 2 }))
        .filter((o) => o.j !== i).sort((a, b) => a.d - b.d).slice(0, 3);
      near.forEach((o) => { if (o.j > i) edges.push([i, o.j]); });
    });
    function resize() {
      dpr = PERF.dpr; w = hero.clientWidth; h = hero.clientHeight;
      canvas2d.width = w * dpr; canvas2d.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (still) draw(1);
    }
    function draw(time) {
      ctx.clearRect(0, 0, w, h);
      const narrow = w < 720;
      const cx = narrow ? w / 2 : w * 0.68, cy = narrow ? h * 0.24 : h * 0.5;
      const R = narrow ? Math.min(w * 0.3, h * 0.16) : Math.min(w * 0.2, h * 0.3);
      const ay = time * 0.25 + pointer.x * 0.5, ax = -0.35 - pointer.y * 0.3;
      const cyw = Math.cos(ay), syw = Math.sin(ay), cxw = Math.cos(ax), sxw = Math.sin(ax);
      const proj = pts.map((p) => {
        const x1 = p.x * cyw + p.z * syw, z1 = -p.x * syw + p.z * cyw;
        const y2 = p.y * cxw - z1 * sxw, z2 = p.y * sxw + z1 * cxw;
        const s = 1 / (1 - z2 * 0.25);
        return { x: cx + x1 * R * s, y: cy + y2 * R * s, z: z2 };
      });
      ctx.lineWidth = 1;
      edges.forEach(([a, b]) => {
        const pa = proj[a], pb = proj[b], d = (pa.z + pb.z) / 2;
        ctx.strokeStyle = `rgba(0,255,65,${(0.06 + (d + 1) * 0.1).toFixed(3)})`;
        ctx.beginPath(); ctx.moveTo(pa.x, pa.y); ctx.lineTo(pb.x, pb.y); ctx.stroke();
      });
      proj.forEach((p) => {
        ctx.fillStyle = `rgba(0,255,65,${(0.25 + (p.z + 1) * 0.35).toFixed(3)})`;
        const s = 1.2 + (p.z + 1) * 0.9; ctx.fillRect(p.x - s / 2, p.y - s / 2, s, s);
      });
      labels.forEach((lab, i) => {
        const th = orbitAngle(i, time), depth = (Math.sin(th) + 1) / 2;
        const lx = cx + Math.cos(th) * R * 1.45, ly = cy + orbitY(i) * R * 0.5 + Math.sin(th) * R * 0.22;
        lab.style.opacity = (0.3 + depth * 0.7).toFixed(2);
        lab.style.transform = `translate3d(${lx.toFixed(1)}px, ${ly.toFixed(1)}px, 0) translate(-50%, -50%) scale(${(0.82 + depth * 0.2).toFixed(3)})`;
      });
    }
    function loop(ts) {
      if (!running) return;
      t = ts / 1000; draw(t);
      requestAnimationFrame(loop);
    }
    const kick = () => { if (running || still || !heroVisible || document.hidden) return; running = true; requestAnimationFrame(loop); };
    resize();
    window.addEventListener('resize', debounce(resize, 150));
    setInterval(() => { if (!running) kick(); else if (!heroVisible || document.hidden) running = false; }, 500);
    kick();
    return { mode: '2d' };
  }

  if (!webglAvailable()) return fallback2D();

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas: canvas3d, antialias: !isMobile(), alpha: true, powerPreference: 'high-performance' });
  } catch { return fallback2D(); }

  let dpr = PERF.dpr;
  renderer.setPixelRatio(dpr);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 60);
  camera.position.set(0, 0, 9);

  const core = new THREE.Group();          // position / tilt / scroll
  const spin = new THREE.Group();          // slow self-rotation
  core.add(spin); scene.add(core);

  const GREEN = 0x00ff41, GREEN2 = 0x00c853, BLUE = 0x00a8ff, RED = 0xff304f;
  const dotTex = makeDotTexture();

  /* inner detection core */
  const innerGeo = new THREE.IcosahedronGeometry(1.0, 1);
  const inner = new THREE.Mesh(innerGeo, new THREE.MeshStandardMaterial({
    color: 0x0b1712, metalness: 0.85, roughness: 0.3, emissive: GREEN, emissiveIntensity: 0.1, flatShading: true
  }));
  spin.add(inner);
  spin.add(new THREE.LineSegments(new THREE.EdgesGeometry(innerGeo), new THREE.LineBasicMaterial({ color: GREEN, transparent: true, opacity: 0.8 })));

  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture('rgba(0,255,65,.55)', 'rgba(0,255,65,.12)'), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
  }));
  glow.scale.set(4.2, 4.2, 1); core.add(glow);

  /* node shell */
  const shellGeo = new THREE.IcosahedronGeometry(1.7, 2);
  spin.add(new THREE.LineSegments(new THREE.WireframeGeometry(shellGeo), new THREE.LineBasicMaterial({ color: GREEN2, transparent: true, opacity: 0.16 })));

  const nodeSrc = new THREE.IcosahedronGeometry(1.7, 1).attributes.position;
  const seen = new Set(), nodes = [];
  for (let i = 0; i < nodeSrc.count; i++) {
    const v = new THREE.Vector3().fromBufferAttribute(nodeSrc, i), key = v.toArray().map((x) => x.toFixed(3)).join();
    if (!seen.has(key)) { seen.add(key); nodes.push(v); }
  }
  const nodePos = new Float32Array(nodes.length * 3), nodeCol = new Float32Array(nodes.length * 3);
  const cGreen = new THREE.Color(GREEN), cBlue = new THREE.Color(BLUE), cRed = new THREE.Color(RED);
  nodes.forEach((v, i) => {
    v.toArray(nodePos, i * 3);
    const c = i % 11 === 3 ? cBlue : i % 13 === 5 ? cRed : cGreen;
    c.toArray(nodeCol, i * 3);
  });
  const nodeGeo = new THREE.BufferGeometry();
  nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePos, 3));
  nodeGeo.setAttribute('color', new THREE.BufferAttribute(nodeCol, 3));
  spin.add(new THREE.Points(nodeGeo, new THREE.PointsMaterial({
    size: 0.2, map: dotTex, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
  })));

  /* data lines: every shell node connects back to its nearest inner vertex */
  const anchors = new THREE.IcosahedronGeometry(1.0, 0).attributes.position;
  const anchorList = [];
  for (let i = 0; i < anchors.count; i++) anchorList.push(new THREE.Vector3().fromBufferAttribute(anchors, i));
  const spokes = [];
  nodes.forEach((v) => {
    let best = anchorList[0], bd = Infinity;
    anchorList.forEach((a) => { const d = a.distanceToSquared(v); if (d < bd) { bd = d; best = a; } });
    spokes.push(best.x, best.y, best.z, v.x, v.y, v.z);
  });
  const spokeGeo = new THREE.BufferGeometry();
  spokeGeo.setAttribute('position', new THREE.Float32BufferAttribute(spokes, 3));
  spin.add(new THREE.LineSegments(spokeGeo, new THREE.LineBasicMaterial({ color: GREEN, transparent: true, opacity: 0.2 })));

  /* orbit rings + travelling nodes */
  const rings = [];
  [[2.3, 1.25, 0.2, GREEN], [2.55, 0.6, -0.9, BLUE], [2.8, 1.7, 0.6, GREEN2]].forEach(([r, rx, ry, col], i) => {
    const tilt = new THREE.Group(); tilt.rotation.set(rx, ry, 0);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.006, 6, 180), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: col === BLUE ? 0.25 : 0.4 }));
    for (let k = 0; k < 2; k++) {
      const orb = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 10), new THREE.MeshBasicMaterial({ color: col }));
      const a = k * Math.PI + i; orb.position.set(Math.cos(a) * r, Math.sin(a) * r, 0); ring.add(orb);
    }
    tilt.add(ring); core.add(tilt); rings.push({ ring, speed: (0.18 + i * 0.07) * (i % 2 ? -1 : 1) });
  });

  /* scan plane */
  const scan = new THREE.Mesh(new THREE.RingGeometry(1.72, 1.78, 96), new THREE.MeshBasicMaterial({
    color: GREEN, transparent: true, opacity: 0.4, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false
  }));
  scan.rotation.x = -Math.PI / 2; core.add(scan);

  /* particles */
  const pc = PERF.coreParticles, pp = new Float32Array(pc * 3);
  for (let i = 0; i < pc; i++) {
    const r = 3 + Math.random() * 3.2, th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
    pp[i * 3] = r * Math.sin(ph) * Math.cos(th); pp[i * 3 + 1] = r * Math.cos(ph) * 0.8; pp[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th);
  }
  const pGeo = new THREE.BufferGeometry(); pGeo.setAttribute('position', new THREE.BufferAttribute(pp, 3));
  const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({
    size: 0.06, map: dotTex, color: GREEN, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending
  }));
  scene.add(particles);

  /* label connectors */
  const linkPos = new Float32Array(n * 6), linkGeo = new THREE.BufferGeometry();
  linkGeo.setAttribute('position', new THREE.BufferAttribute(linkPos, 3));
  const links = new THREE.LineSegments(linkGeo, new THREE.LineBasicMaterial({ color: GREEN, transparent: true, opacity: 0.16 }));
  core.add(links);

  /* lights */
  scene.add(new THREE.AmbientLight(0x0d2a1b, 1.2));
  const l1 = new THREE.PointLight(GREEN, 2.4, 22); l1.position.set(3, 2.5, 5); scene.add(l1);
  const l2 = new THREE.PointLight(BLUE, 1.6, 22); l2.position.set(-4, -2, 4); scene.add(l2);
  const l3 = new THREE.DirectionalLight(0xffffff, 0.35); l3.position.set(0, 4, 3); scene.add(l3);

  /* layout: core sits right of the headline on desktop, above it on phones */
  const OUTER = 3.9;
  const base = { x: 0, y: 0, s: 1 };
  function layout() {
    const w = hero.clientWidth, h = hero.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    const visH = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z, visW = visH * camera.aspect;
    if (w < 720) { base.x = 0; base.y = visH * 0.2; base.s = clamp((visW * 0.5) / 3.3, 0.34, 1); }
    else { base.x = visW * 0.21; base.y = 0; const availR = visW / 2 - base.x; base.s = clamp(Math.min(visH * 0.5, availR * 0.96) / OUTER, 0.4, 1); }
    core.scale.setScalar(base.s);
    if (still) frame(1, 0);
  }

  const v3 = new THREE.Vector3();
  const state = { tiltX: 0, tiltY: 0 };
  function frame(t, dt) {
    const heroH = hero.clientHeight || 1;
    const p = clamp(window.scrollY / heroH, 0, 1);
    if (!still) {
      spin.rotation.y += dt * 0.14; spin.rotation.x = Math.sin(t * 0.2) * 0.12;
      rings.forEach((r) => { r.ring.rotation.z += dt * r.speed; });
      particles.rotation.y += dt * 0.02;
      const sy = Math.sin(t * 0.6) * 1.6;
      scan.position.y = sy; scan.scale.setScalar(Math.max(0.05, Math.sqrt(Math.max(0, 1.72 * 1.72 - sy * sy)) / 1.72));
      scan.material.opacity = 0.18 + (1 - Math.abs(sy) / 1.7) * 0.3;
      glow.material.opacity = 0.75 + Math.sin(t * 1.4) * 0.15;
      camera.position.x = Math.sin(t * 0.15) * 0.35; camera.position.y = Math.cos(t * 0.11) * 0.2;
    }
    camera.position.z = 9 + p * 2.5; camera.lookAt(0, 0, 0);
    state.tiltY = lerp(state.tiltY, pointer.x * 0.35 + p * 1.3, 0.06);
    state.tiltX = lerp(state.tiltX, pointer.y * 0.2, 0.06);
    core.rotation.y = state.tiltY; core.rotation.x = state.tiltX;
    core.position.set(base.x, base.y + p * 1.1, 0);
    core.updateMatrixWorld(true);

    const w = hero.clientWidth, h = hero.clientHeight, narrow = w < 720;
    labels.forEach((lab, i) => {
      if (narrow && i % 2) { lab.style.display = 'none'; return; }
      lab.style.display = '';
      const th = orbitAngle(i, t), y = orbitY(i);
      v3.set(Math.cos(th) * (narrow ? 2.2 : 2.9), y, Math.sin(th) * 3.3);
      linkPos.set([0, 0, 0], i * 6);
      const inner = v3.clone().normalize().multiplyScalar(1.78);
      linkPos[i * 6] = inner.x; linkPos[i * 6 + 1] = inner.y; linkPos[i * 6 + 2] = inner.z;
      linkPos[i * 6 + 3] = v3.x; linkPos[i * 6 + 4] = v3.y; linkPos[i * 6 + 5] = v3.z;
      core.localToWorld(v3); v3.project(camera);
      const depth = (Math.sin(th) + 1) / 2;
      const sx = (v3.x * 0.5 + 0.5) * w, sy = (-v3.y * 0.5 + 0.5) * h;
      lab.style.opacity = (0.28 + depth * 0.72).toFixed(2);
      lab.style.transform = `translate3d(${sx.toFixed(1)}px, ${sy.toFixed(1)}px, 0) translate(-50%, -50%) scale(${(0.82 + depth * 0.2).toFixed(3)})`;
    });
    linkGeo.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
  }

  /* loop with visibility gating + adaptive resolution */
  let running = false, last = 0, clock = 0, acc = 0, frames = 0;
  function loop(ts) {
    if (!running) return;
    const dt = clamp((ts - last) / 1000, 0, 0.05); last = ts; clock += dt;
    frame(clock, dt);
    acc += dt; frames++;
    if (frames === 90) {
      const avg = acc / frames; acc = 0; frames = 0;
      if (avg > 0.026 && dpr > 0.8) { dpr = Math.max(0.8, dpr - 0.25); renderer.setPixelRatio(dpr); layout(); }
    }
    requestAnimationFrame(loop);
  }
  function kick() {
    if (still || running || !heroVisible || document.hidden) return;
    running = true; last = performance.now(); requestAnimationFrame(loop);
  }
  setInterval(() => { if (!running) kick(); else if (!heroVisible || document.hidden) running = false; }, 400);

  canvas3d.addEventListener('webglcontextlost', (e) => { e.preventDefault(); running = false; fallback2D(); });

  layout();
  window.addEventListener('resize', debounce(layout, 120));
  if (still) { window.addEventListener('scroll', rafThrottle(() => frame(1, 0)), { passive: true }); frame(1, 0); }
  else { frame(0.001, 0); kick(); }
  return { mode: 'webgl' };
}


/* ================================================================
   Specialization cards + interactive skill map
   ================================================================ */

function renderSpecializations() {
  const grid = $('#spec-grid');
  clear(grid);
  CONFIG.specializations.forEach((s, i) => {
    const card = el('article', { class: 'panel spec-card', 'data-tone': s.tone, 'data-tilt': '', 'data-reveal': 'rotate', style: { transitionDelay: `${i * 90}ms` } },
      el('h3', { text: s.title }),
      el('p', { class: 'tagline', text: s.tagline }),
      el('ul', null, s.items.map((t) => el('li', { text: t })))
    );
    grid.append(card);
  });
}

function mulberry32(a) {
  return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

function initSkillMap() {
  const wrap = $('#skillmap'), svg = $('#skillmap-svg'), layer = $('#skillmap-nodes'), info = $('#skill-info'), legend = $('#skill-legend');
  const nodes = CONFIG.skillNodes.filter((n) => n.confirmed !== false);
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const edgeSet = new Set(), edges = [];
  nodes.forEach((n) => (n.links || []).forEach((t) => {
    if (!byId.has(t)) return;
    const k = [n.id, t].sort().join('|');
    if (!edgeSet.has(k)) { edgeSet.add(k); edges.push([n.id, t]); }
  }));
  const neighbors = new Map(nodes.map((n) => [n.id, new Set()]));
  edges.forEach(([a, b]) => { neighbors.get(a).add(b); neighbors.get(b).add(a); });

  if (!nodes.length) { wrap.parentElement.hidden = true; return; }

  clear(legend);
  Object.entries(CONFIG.skillGroups).forEach(([k, g]) => {
    if (nodes.some((n) => n.group === k)) legend.append(el('li', { text: g.label, style: { '--c': g.color } }));
  });

  const nodeEls = new Map(), lineEls = new Map();
  nodes.forEach((n) => {
    const g = CONFIG.skillGroups[n.group] || { color: '#00FF41' };
    const b = el('button', { class: 'sk-node', type: 'button', text: n.label, 'aria-label': `${n.label}, ${g.label}. ${n.desc || ''}`, style: { '--c': g.color, '--x': 0, '--y': 0 } });
    b.style.transform = 'translate(calc(var(--x) * 1px), calc(var(--y) * 1px)) translate(-50%, -50%) scale(var(--s, 1))';
    b.addEventListener('mouseenter', () => preview(n.id));
    b.addEventListener('mouseleave', () => preview(null));
    b.addEventListener('focus', () => preview(n.id));
    b.addEventListener('blur', () => preview(null));
    b.addEventListener('click', () => pin(n.id));
    nodeEls.set(n.id, b); layer.append(b);
  });
  edges.forEach(([a, b]) => {
    const l = svgEl('line', { class: 'sk-line' }); svg.append(l); lineEls.set(`${a}|${b}`, l);
  });

  /* deterministic force layout so the map looks the same on every visit */
  const anchorsFor = (W, H) => {
    const narrow = W < 560;
    return narrow
      ? { core: [0.5, 0.5], blue: [0.3, 0.8], red: [0.72, 0.8], research: [0.5, 0.13] }
      : { core: [0.5, 0.5], blue: [0.17, 0.5], red: [0.83, 0.5], research: [0.5, 0.12] };
  };
  let pos = new Map();
  function layout() {
    const W = wrap.clientWidth, H = wrap.clientHeight;
    if (!W || !H) return;
    const rnd = mulberry32(9), anc = anchorsFor(W, H);
    const P = nodes.map((n) => {
      const a = anc[n.group] || anc.core;
      return { id: n.id, group: n.group, w: 34 + n.label.length * 8, x: a[0] * W + (rnd() - 0.5) * 80, y: a[1] * H + (rnd() - 0.5) * 80, vx: 0, vy: 0 };
    });
    const idx = new Map(P.map((p, i) => [p.id, i]));
    const rest = Math.min(W, H) * 0.3;
    for (let it = 0; it < 400; it++) {
      const cool = 1 - it / 400;
      for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) {
        const a = P[i], b = P[j];
        const dx = a.x - b.x, dy = a.y - b.y, d2 = (dx * 0.6) ** 2 + dy * dy + 0.01, d = Math.sqrt(d2);
        const f = (30000 / d2) * cool, fx = (dx * 0.6 / d) * f / 0.6, fy = (dy / d) * f;
        a.vx += fx; a.vy += fy; b.vx -= fx; b.vy -= fy;
        // rectangle-aware separation so labels never sit on top of each other
        const ox = (a.w + b.w) / 2 + 24 - Math.abs(dx), oy = 56 - Math.abs(dy);
        if (ox > 0 && oy > 0) {
          if (ox < oy * 1.6) { const sgn = Math.sign(dx) || 1; a.vx += sgn * ox * 0.15; b.vx -= sgn * ox * 0.15; }
          else { const sgn = Math.sign(dy) || 1; a.vy += sgn * oy * 0.15; b.vy -= sgn * oy * 0.15; }
        }
      }
      edges.forEach(([s, t]) => {
        const a = P[idx.get(s)], b = P[idx.get(t)];
        const dx = b.x - a.x, dy = b.y - a.y, d = Math.sqrt(dx * dx + dy * dy) || 1, f = (d - rest) * 0.012;
        a.vx += (dx / d) * f; a.vy += (dy / d) * f; b.vx -= (dx / d) * f; b.vy -= (dy / d) * f;
      });
      P.forEach((p) => {
        const a = anc[p.group] || anc.core;
        p.vx += (a[0] * W - p.x) * 0.004; p.vy += (a[1] * H - p.y) * 0.004;
        p.x += p.vx * 0.5 * cool; p.y += p.vy * 0.5 * cool; p.vx *= 0.6; p.vy *= 0.6;
        p.x = clamp(p.x, p.w / 2 + 12, W - p.w / 2 - 12); p.y = clamp(p.y, 34, H - 34);
      });
    }
    pos = new Map(P.map((p) => [p.id, p]));
    P.forEach((p) => { const b = nodeEls.get(p.id); b.style.setProperty('--x', p.x.toFixed(1)); b.style.setProperty('--y', p.y.toFixed(1)); });
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    edges.forEach(([a, b]) => {
      const l = lineEls.get(`${a}|${b}`), pa = pos.get(a), pb = pos.get(b);
      l.setAttribute('x1', pa.x.toFixed(1)); l.setAttribute('y1', pa.y.toFixed(1));
      l.setAttribute('x2', pb.x.toFixed(1)); l.setAttribute('y2', pb.y.toFixed(1));
    });
  }

  let pinned = null, previewed = null;
  function paint(id) {
    const rel = id ? neighbors.get(id) : null;
    nodeEls.forEach((b, k) => {
      b.classList.toggle('is-selected', k === id);
      b.classList.toggle('is-linked', !!rel && rel.has(k));
      b.classList.toggle('is-dim', !!id && k !== id && !rel.has(k));
      b.style.setProperty('--s', k === id ? '1.14' : '1');
    });
    lineEls.forEach((l, key) => {
      const [a, b] = key.split('|'), on = id && (a === id || b === id);
      l.classList.toggle('is-active', !!on); l.classList.toggle('is-dim', !!id && !on);
    });
    renderInfo(id);
  }
  function renderInfo(id) {
    clear(info);
    const n = id && byId.get(id);
    if (!n) { info.append(el('p', { class: 'skill-info-empty', text: 'Select a node to inspect it.' })); info.style.removeProperty('--c'); return; }
    const g = CONFIG.skillGroups[n.group] || { label: '', color: '#00FF41' };
    info.style.setProperty('--c', g.color);
    const rel = Array.from(neighbors.get(id));
    info.append(
      el('span', { class: 'tag', text: g.label }),
      el('h4', { text: n.label }),
      el('p', { text: n.desc || 'No description yet.' }),
      el('dl', null,
        el('dt', { text: 'category' }), el('dd', { text: g.label }),
        el('dt', { text: 'connections' }), el('dd', { text: String(rel.length) })
      ),
      rel.length ? el('div', { class: 'rel', 'aria-label': 'Connected nodes' }, rel.map((r) => el('button', { type: 'button', text: byId.get(r).label, onclick: () => pin(r) }))) : null
    );
  }
  function preview(id) { previewed = id; paint(id || pinned); }
  function pin(id) { pinned = pinned === id ? null : id; paint(pinned || previewed); }

  layout(); paint(null);
  if ('ResizeObserver' in window) {
    let lastW = wrap.clientWidth;
    new ResizeObserver(debounce(() => { if (wrap.clientWidth !== lastW) { lastW = wrap.clientWidth; layout(); } }, 150)).observe(wrap);
  } else window.addEventListener('resize', debounce(layout, 150));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
}


/* ================================================================
   GitHub synchronisation (Mode A: browser -> GitHub public API)
   Flow: GitHub API -> cache (localStorage, TTL) -> gh store -> components.
   Optional Mode B: CONFIG.apiBase -> your backend cache -> same store.
   ================================================================ */

const GH_API = 'https://api.github.com';
const CACHE_KEY = 'c9v:gh:v2';
const READMES_KEY = 'c9v:readme:v1';

const gh = createStore({ status: 'loading', repos: [], user: null, at: 0 });

/* ---------- storage helpers (private mode / blocked storage must never break the page) ---------- */
function lsGet(key) { try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch { return null; } }
function lsSet(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* ignore */ } }

/** Reduce a raw API repo to the small, type-checked shape the UI uses. */
function slimRepo(r) {
  return {
    id: Number(r.id) || 0,
    name: String(r.name || ''),
    html_url: String(r.html_url || ''),
    description: r.description ? String(r.description) : '',
    language: r.language ? String(r.language) : '',
    stars: Number(r.stargazers_count ?? r.stars) || 0,
    forks: Number(r.forks_count ?? r.forks) || 0,
    created_at: String(r.created_at || ''),
    updated_at: String(r.updated_at || ''),
    pushed_at: String(r.pushed_at || r.updated_at || ''),
    topics: Array.isArray(r.topics) ? r.topics.map(String) : [],
    homepage: r.homepage ? String(r.homepage) : '',
    archived: !!r.archived,
    fork: !!r.fork,
    visibility: r.visibility ? String(r.visibility) : 'public',
    default_branch: r.default_branch ? String(r.default_branch) : 'main'
  };
}
function slimUser(u) {
  if (!u) return null;
  return {
    login: String(u.login || CONFIG.githubUsername),
    public_repos: Number(u.public_repos) || 0,
    followers: Number(u.followers) || 0,
    following: Number(u.following) || 0,
    html_url: String(u.html_url || CONFIG.githubUrl)
  };
}

async function fetchJson(url, { timeout = 9000, method = 'GET' } = {}) {
  const ctrl = new AbortController(), timer = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(url, { method, headers: { Accept: 'application/vnd.github+json' }, signal: ctrl.signal });
    if (method === 'HEAD') return res;
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally { clearTimeout(timer); }
}

async function loadFromGitHub() {
  const user = CONFIG.githubUsername;
  const repoPages = async () => {
    const all = [];
    for (let page = 1; page <= 3; page++) {
      const batch = await fetchJson(`${GH_API}/users/${encodeURIComponent(user)}/repos?per_page=100&sort=updated&direction=desc&page=${page}`);
      all.push(...batch);
      if (batch.length < 100) break;
    }
    return all;
  };
  const [repos, profile] = await Promise.all([repoPages(), fetchJson(`${GH_API}/users/${encodeURIComponent(user)}`).catch(() => null)]);
  return { repos: repos.map(slimRepo), user: slimUser(profile) };
}

async function loadFromBackend() {
  const base = CONFIG.apiBase.replace(/\/+$/, '');
  const data = await fetchJson(`${base}/api/projects`, { timeout: 6000 });
  if (!data || !Array.isArray(data.repos)) throw new Error('bad payload');
  return { repos: data.repos.map(slimRepo), user: slimUser(data.user) };
}

let lastForced = 0;
async function syncGithub({ force = false } = {}) {
  if (!CONFIG.githubSyncEnabled) { gh.set({ status: 'disabled', repos: [], user: null }); return gh.get(); }
  const cache = lsGet(CACHE_KEY);
  const ttl = Math.max(1, CONFIG.cacheMinutes) * 60000;
  const usable = cache && Array.isArray(cache.repos);

  if (usable && !force && Date.now() - cache.ts < ttl) {
    gh.set({ status: 'live', repos: cache.repos, user: cache.user, at: cache.ts });
    return gh.get();
  }
  if (force) { if (Date.now() - lastForced < 15000) return gh.get(); lastForced = Date.now(); }
  if (!usable) gh.set({ status: 'loading' });

  try {
    let data = null;
    if (CONFIG.apiBase) { try { data = await loadFromBackend(); } catch { data = null; } }
    if (!data) data = await loadFromGitHub();
    lsSet(CACHE_KEY, { ts: Date.now(), repos: data.repos, user: data.user });
    gh.set({ status: 'live', repos: data.repos, user: data.user, at: Date.now() });
  } catch {
    if (usable) gh.set({ status: 'cached', repos: cache.repos, user: cache.user, at: cache.ts });
    else gh.set({ status: 'error', repos: [], user: null, at: 0 });
  }
  return gh.get();
}

/* ---------- selection & classification ---------- */
const normName = (s) => String(s).toLowerCase().replace(/[-_\s]/g, '');
const OVERRIDES = new Map();
Object.entries(CONFIG.toolOverrides || {}).forEach(([name, o]) => {
  OVERRIDES.set(normName(name), o);
  (o.aliases || []).forEach((a) => OVERRIDES.set(normName(a), o));
});

function visibleRepos(state = gh.get()) {
  const ex = new Set((CONFIG.excludeRepos || []).map((s) => s.toLowerCase()));
  return state.repos
    .filter((r) => r.name && !ex.has(r.name.toLowerCase()) && (CONFIG.includeForks || !r.fork) && !(CONFIG.hideArchived && r.archived))
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
}

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
/**
 * Classify a repository as SECURITY TOOL or PROJECT.
 * Signals: an explicit override, then topics, then the description. Repo NAMES are never used to guess.
 */
function classify(repo) {
  const ov = OVERRIDES.get(normName(repo.name));
  const topics = repo.topics.map((t) => t.toLowerCase());
  const desc = (repo.description || '').toLowerCase();
  const matched = [];
  for (const k of CONFIG.toolKeywords || []) {
    const kw = k.toLowerCase(), variants = [kw, kw.replace(/-/g, ' '), `${kw}s`, `${kw.replace(/-/g, ' ')}s`];
    const inTopics = topics.some((t) => variants.includes(t) || variants.includes(t.replace(/-/g, ' ')));
    const inDesc = variants.some((v) => new RegExp(`(^|[^a-z0-9])${escapeRe(v)}([^a-z0-9]|$)`).test(desc));
    if (inTopics || inDesc) matched.push(kw);
  }
  let isTool = matched.length > 0;
  if (ov && typeof ov.tool === 'boolean') isTool = ov.tool;
  const label = (ov && ov.label) || (
    matched.includes('osint') ? 'OSINT tool' :
    matched.includes('scanner') ? 'Scanner' :
    matched.includes('pentest') ? 'Pentest tool' :
    matched.includes('automation') ? 'Automation tool' : 'Security tool');
  return { isTool, matched, label, override: ov || null };
}

/* ---------- README existence (only checked when a project modal is opened) ---------- */
const readmeMemo = new Map();
async function repoHasReadme(name) {
  if (readmeMemo.has(name)) return readmeMemo.get(name);
  const store = lsGet(READMES_KEY) || {};
  const hit = store[name];
  if (hit && Date.now() - hit.ts < 864e5) { readmeMemo.set(name, hit.ok); return hit.ok; }
  let ok = false;
  try {
    const res = await fetchJson(`${GH_API}/repos/${encodeURIComponent(CONFIG.githubUsername)}/${encodeURIComponent(name)}/readme`, { method: 'HEAD', timeout: 6000 });
    if (res.status === 200) ok = true;
    else if (res.status !== 404) { readmeMemo.set(name, false); return false; } // unknown (rate limit etc.): show nothing, cache nothing
  } catch { readmeMemo.set(name, false); return false; }
  store[name] = { ok, ts: Date.now() }; lsSet(READMES_KEY, store);
  readmeMemo.set(name, ok);
  return ok;
}


/* ================================================================
   GitHub-driven UI: projects, modal, tools, research timeline, stats
   Everything from GitHub goes through el()/textContent — never innerHTML.
   ================================================================ */

/* ---------- typed terminal lines (visual only) ---------- */
async function typeLines(container, lines, { speed = 16, gap = 120, token } = {}) {
  clear(container);
  for (const ln of lines) {
    if (token && token.cancelled) return;
    const row = el('span', { class: 'line' });
    if (ln.prompt) row.append(el('span', { class: 'prompt', text: ln.prompt }));
    const txt = el('span', { class: ln.cls || '' }); row.append(txt); container.append(row);
    if (reduceMotion() || !ln.type) txt.textContent = ln.text;
    else for (const ch of ln.text) { if (token && token.cancelled) return; txt.textContent += ch; await wait(speed); }
    await wait(reduceMotion() ? 0 : gap);
  }
  if (!(token && token.cancelled)) container.lastChild && container.lastChild.append(el('span', { class: 'caret', 'aria-hidden': 'true' }));
}

/* ---------- sync status line ---------- */
function initSyncStatus() {
  const line = $('#sync-status'), btn = $('#sync-refresh');
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  function paint() {
    const s = gh.get(); clear(line);
    if (s.status === 'loading') line.append('Synchronizing with GitHub…');
    else if (s.status === 'live') line.append('Last synchronized: ', el('span', { class: 'ok', text: cap(relTime(s.at)) }));
    else if (s.status === 'cached') line.append(el('span', { class: 'warn', text: 'GitHub synchronization unavailable. Showing cached projects.' }), ` Last synchronized: ${relTime(s.at)}.`);
    else if (s.status === 'disabled') line.append('GitHub synchronization is switched off in config.js.');
    else line.append(el('span', { class: 'warn', text: 'GitHub synchronization temporarily unavailable.' }), ' Use the refresh button to try again.');
  }
  gh.subscribe(paint);
  setInterval(paint, 30000);
  btn.addEventListener('click', async () => {
    btn.classList.add('is-spinning'); btn.disabled = true;
    await syncGithub({ force: true });
    setTimeout(() => { btn.classList.remove('is-spinning'); btn.disabled = false; }, 600);
  });
}

/* ---------- Projects ---------- */
const FILTERS = [['ALL', null], ['PYTHON', 'Python'], ['JAVASCRIPT', 'JavaScript'], ['HTML', 'HTML'], ['TYPESCRIPT', 'TypeScript'], ['OTHER', 'other']];
const projectState = { filter: 'ALL', query: '', nodes: new Map(), sigs: new Map() };

function repoMatchesFilter(r, key) {
  if (key === 'ALL') return true;
  const lang = FILTERS.find((f) => f[0] === key)[1];
  if (key === 'OTHER') return !FILTERS.some((f) => f[1] && f[1] !== 'other' && f[1] === r.language);
  return r.language === lang;
}
function repoMatchesQuery(r, q) {
  if (!q) return true;
  const hay = [r.name, r.description, r.language, ...r.topics].join(' ').toLowerCase();
  return q.toLowerCase().split(/\s+/).filter(Boolean).every((w) => hay.includes(w));
}
const repoSig = (r) => [r.updated_at, r.stars, r.forks, r.description, r.language, r.topics.join(), r.archived].join('|');

function metaItem(icon, text) { return el('span', { class: 'meta' }, icon, text); }

function buildProjectCard(r, index) {
  const c = classify(r);
  const badges = el('div', { class: 'badges' },
    el('span', { class: 'badge is-public', text: r.visibility === 'public' ? 'Public' : r.visibility }),
    c.isTool ? el('span', { class: 'badge is-tool', text: 'Tool' }) : null,
    r.archived ? el('span', { class: 'badge is-warn', text: 'Archived' }) : null,
    r.fork ? el('span', { class: 'badge', text: 'Fork' }) : null
  );
  const foot = el('div', { class: 'proj-foot' },
    r.language ? el('span', { class: 'meta' }, el('i', { class: 'lang-dot', style: { '--lc': langColor(r.language) } }), r.language) : null,
    metaItem(uiIcon('star'), nf.format(r.stars)),
    metaItem(uiIcon('fork'), nf.format(r.forks)),
    el('span', { class: 'updated', text: `Updated ${relTime(r.updated_at)}`, title: fmtDate(r.updated_at) })
  );
  return el('article', { class: 'proj-card', 'data-tilt': '', 'data-cursor': 'view', 'data-reveal': 'rotate', style: { transitionDelay: `${Math.min(index, 8) * 55}ms` } },
    el('div', { class: 'proj-top' },
      el('div', null, badges, el('h3', { class: 'proj-title', style: { marginTop: '.65rem' } },
        el('button', { type: 'button', text: r.name, 'aria-haspopup': 'dialog', onclick: () => openProjectModal(r.id) }))),
      el('a', { class: 'gh-link', href: r.html_url, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `${r.name} on GitHub (opens in a new tab)` }, brandIcon('github'))
    ),
    el('p', { class: `proj-desc${r.description ? '' : ' is-empty'}`, text: r.description || 'No description provided.' }),
    r.topics.length ? el('div', { class: 'topics' }, r.topics.slice(0, 5).map((t) => el('span', { text: t }))) : null,
    foot
  );
}

function initProjects() {
  const grid = $('#project-grid'), empty = $('#project-empty'), filters = $('#project-filters'), search = $('#project-search');
  for (let i = 0; i < 3; i++) grid.append(el('div', { class: 'skeleton', 'aria-hidden': 'true' }));

  const btns = FILTERS.map(([key]) => {
    const b = el('button', { type: 'button', class: 'chip-btn', 'aria-pressed': String(key === 'ALL'), dataset: { key } }, key, el('span', { class: 'count', text: '' }));
    b.addEventListener('click', () => { projectState.filter = key; btns.forEach((x) => x.setAttribute('aria-pressed', String(x === b))); applyProjectFilters(); });
    filters.append(b); return b;
  });
  search.addEventListener('input', debounce(() => { projectState.query = search.value.trim(); applyProjectFilters(); }, 120));

  function applyProjectFilters() {
    const s = gh.get(), repos = visibleRepos(s);
    let shown = 0;
    repos.forEach((r) => {
      const node = projectState.nodes.get(r.id); if (!node) return;
      const ok = repoMatchesFilter(r, projectState.filter) && repoMatchesQuery(r, projectState.query);
      node.hidden = !ok; if (ok) shown++;
    });
    empty.hidden = shown > 0 || s.status === 'loading';
    if (!empty.hidden) {
      empty.textContent = s.status === 'error' ? 'Projects will appear here as soon as GitHub can be reached.'
        : s.status === 'disabled' ? 'GitHub synchronization is switched off in config.js.'
        : !repos.length ? 'No public projects found.' : 'No projects match your filters.';
    }
  }

  gh.subscribe((s) => {
    if (s.status === 'loading') return;
    const repos = visibleRepos(s);
    grid.setAttribute('aria-busy', 'false');
    $$('.skeleton', grid).forEach((n) => n.remove());
    const keep = new Set(repos.map((r) => r.id));
    projectState.nodes.forEach((node, id) => { if (!keep.has(id)) { node.remove(); projectState.nodes.delete(id); projectState.sigs.delete(id); } });
    repos.forEach((r, i) => {
      const sig = repoSig(r);
      if (projectState.sigs.get(r.id) !== sig) {           // only rebuild cards whose data changed
        const node = buildProjectCard(r, i), old = projectState.nodes.get(r.id);
        old ? old.replaceWith(node) : grid.append(node);
        projectState.nodes.set(r.id, node); projectState.sigs.set(r.id, sig);
      }
    });
    repos.forEach((r) => grid.append(projectState.nodes.get(r.id)));  // keep newest-first order
    btns.forEach((b) => {
      const key = b.dataset.key;
      b.querySelector('.count').textContent = repos.length ? String(repos.filter((r) => repoMatchesFilter(r, key)).length) : '';
    });
    initTilt(grid); initReveal(grid); applyProjectFilters();
  });
}

/* ---------- Project modal ---------- */
let modalToken = null;
function openProjectModal(id) {
  const r = gh.get().repos.find((x) => x.id === id); if (!r) return;
  const dlg = $('#project-modal'), c = classify(r), ov = c.override || {};
  $('#pm-title').textContent = r.name;
  $('#pm-desc').textContent = r.description || 'No description provided.';
  const badges = $('#pm-badges'); clear(badges);
  badges.append(el('span', { class: 'badge is-public', text: r.visibility === 'public' ? 'Public' : r.visibility }));
  if (c.isTool) badges.append(el('span', { class: 'badge is-tool', text: c.label }));
  if (r.archived) badges.append(el('span', { class: 'badge is-warn', text: 'Archived' }));

  const meta = $('#pm-meta'); clear(meta);
  [['Language', r.language || 'Not available'], ['Stars', nf.format(r.stars)], ['Forks', nf.format(r.forks)],
   ['Created', fmtDate(r.created_at)], ['Last updated', fmtDate(r.updated_at)]]
    .forEach(([k, v]) => meta.append(el('div', null, el('dt', { text: k }), el('dd', { text: v }))));

  const topics = $('#pm-topics'); clear(topics);
  r.topics.forEach((t) => topics.append(el('span', { text: t })));
  topics.hidden = !r.topics.length;

  const actions = $('#pm-actions'); clear(actions);
  actions.append(
    el('a', { class: 'btn btn-primary btn-sm', href: `${r.html_url}/tree/${encodeURIComponent(r.default_branch)}`, target: '_blank', rel: 'noopener noreferrer' }, uiIcon('code'), 'VIEW SOURCE'),
    el('a', { class: 'btn btn-ghost btn-sm', href: r.html_url, target: '_blank', rel: 'noopener noreferrer' }, brandIcon('github'), 'OPEN GITHUB')
  );
  const demo = safeUrl(ov.demoUrl || r.homepage);
  if (demo) actions.append(el('a', { class: 'btn btn-ghost btn-sm', href: demo, target: '_blank', rel: 'noopener noreferrer' }, uiIcon('play'), 'LIVE DEMO'));
  const docs = safeUrl(ov.docsUrl);
  if (docs) actions.append(el('a', { class: 'btn btn-ghost btn-sm', href: docs, target: '_blank', rel: 'noopener noreferrer' }, uiIcon('book'), 'DOCUMENTATION'));
  else repoHasReadme(r.name).then((ok) => {
    if (ok && dlg.open && $('#pm-title').textContent === r.name) actions.append(el('a', { class: 'btn btn-ghost btn-sm', href: `${r.html_url}#readme`, target: '_blank', rel: 'noopener noreferrer' }, uiIcon('book'), 'DOCUMENTATION'));
  });

  if (modalToken) modalToken.cancelled = true;
  modalToken = { cancelled: false };
  document.body.classList.add('modal-open');
  if (!dlg.open) dlg.showModal();
  typeLines($('#pm-terminal'), [
    { prompt: '$', text: `git clone ${r.html_url}.git`, type: true },
    { prompt: '$', text: 'analyzing project...', type: true },
    { prompt: '$', text: `repository status: ${r.visibility.toUpperCase()}${r.archived ? ' (ARCHIVED)' : ''}`, type: true, cls: 'ok' }
  ], { token: modalToken, speed: 14, gap: 160 });
}
function initModal() {
  const dlg = $('#project-modal');
  const close = () => { if (modalToken) modalToken.cancelled = true; dlg.close(); };
  $('#pm-close').addEventListener('click', close);
  dlg.addEventListener('click', (e) => { if (e.target === dlg) close(); });
  dlg.addEventListener('close', () => { document.body.classList.remove('modal-open'); if (modalToken) modalToken.cancelled = true; });
}

/* ---------- Tools ---------- */
function initTools() {
  const grid = $('#tools-grid'), empty = $('#tools-empty');
  for (let i = 0; i < 3; i++) grid.append(el('div', { class: 'skeleton', 'aria-hidden': 'true' }));
  gh.subscribe((s) => {
    if (s.status === 'loading') return;
    clear(grid); grid.setAttribute('aria-busy', 'false');
    const tools = visibleRepos(s).map((r) => ({ r, c: classify(r) })).filter((x) => x.c.isTool);
    empty.hidden = tools.length > 0;
    if (!tools.length) {
      empty.textContent = s.status === 'error' ? 'Projects will appear here as soon as GitHub can be reached.'
        : s.status === 'disabled' ? 'GitHub synchronization is switched off in config.js.'
        : visibleRepos(s).length ? 'No security tools detected yet. Repositories with topics such as osint, scanner or pentest appear here automatically.'
        : 'No public projects found.';
      return;
    }
    tools.forEach(({ r, c }, i) => {
      const days = (Date.now() - new Date(r.pushed_at || r.updated_at)) / 864e5;
      const status = r.archived ? ['Archived', ''] : days <= 90 ? ['Active', 'is-active'] : ['Idle', 'is-idle'];
      const demo = safeUrl((c.override && c.override.demoUrl) || r.homepage), docs = safeUrl(c.override && c.override.docsUrl);
      const card = el('article', { class: 'proj-card tool-card', 'data-tilt': '', 'data-cursor': 'view', 'data-reveal': 'rotate', style: { transitionDelay: `${Math.min(i, 6) * 60}ms` } },
        el('div', { class: 'proj-top' },
          el('div', null, el('div', { class: 'badges' }, el('span', { class: 'badge is-tool', text: c.label })),
            el('h3', { class: 'proj-title', style: { marginTop: '.65rem' } }, el('button', { type: 'button', text: r.name, 'aria-haspopup': 'dialog', onclick: () => openProjectModal(r.id) }))),
          el('span', { class: `status ${status[1]}`, text: status[0] })
        ),
        el('p', { class: `proj-desc${r.description ? '' : ' is-empty'}`, text: r.description || 'No description provided.' }),
        el('div', { class: 'proj-foot' },
          r.language ? el('span', { class: 'meta' }, el('i', { class: 'lang-dot', style: { '--lc': langColor(r.language) } }), r.language) : el('span', { class: 'meta', text: 'Language not available' }),
          metaItem(uiIcon('star'), nf.format(r.stars))
        ),
        el('div', { class: 'tool-actions' },
          el('a', { class: 'btn btn-primary btn-sm', href: r.html_url, target: '_blank', rel: 'noopener noreferrer' }, uiIcon('code'), 'SOURCE CODE'),
          demo ? el('a', { class: 'btn btn-ghost btn-sm', href: demo, target: '_blank', rel: 'noopener noreferrer' }, uiIcon('play'), 'LIVE DEMO') : null,
          docs ? el('a', { class: 'btn btn-ghost btn-sm', href: docs, target: '_blank', rel: 'noopener noreferrer' }, uiIcon('book'), 'DOCUMENTATION') : null
        )
      );
      grid.append(card);
    });
    initTilt(grid); initReveal(grid);
  });
}

/* ---------- Research ---------- */
function initResearch() {
  const grid = $('#research-grid'), tl = $('#research-timeline');
  CONFIG.research.forEach((e, i) => {
    const link = safeUrl(e.link);
    grid.append(el('article', { class: 'panel r-card', 'data-tilt': '', 'data-reveal': 'rotate', style: { transitionDelay: `${(i % 3) * 80}ms` } },
      el('div', { class: 'r-meta' }, el('span', { class: 'cat', text: e.category || 'Research' }), e.date ? el('time', { text: e.date }) : null),
      el('h3', { text: e.title }),
      e.summary ? el('p', { text: e.summary }) : null,
      e.technologies && e.technologies.length ? el('div', { class: 'topics' }, e.technologies.map((t) => el('span', { text: t }))) : null,
      link ? el('a', { class: 'r-link', href: link, target: '_blank', rel: 'noopener noreferrer', text: 'Read more' }) : null
    ));
  });

  gh.subscribe((s) => {
    if (s.status === 'loading') return;
    clear(tl);
    const repos = visibleRepos(s).slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    if (!repos.length) {
      tl.append(el('li', null, el('span'), el('p', { text: s.status === 'error' ? 'GitHub synchronization temporarily unavailable.' : 'No public projects found.' })));
      tl.classList.add('is-in'); return;
    }
    repos.slice(0, 8).forEach((r) => tl.append(el('li', null,
      el('time', { datetime: r.created_at, text: fmtDate(r.created_at) }),
      el('div', null,
        el('h4', null, el('a', { href: r.html_url, target: '_blank', rel: 'noopener noreferrer', text: r.name })),
        r.description ? el('p', { text: r.description }) : null,
        el('p', { class: 'tl-meta', text: [r.language, r.stars ? `${nf.format(r.stars)} stars` : ''].filter(Boolean).join(' · ') })
      )
    )));
    initReveal($('#research'));
  });
  onceVisible(tl, () => tl.classList.add('is-in'), '0px');
}

/* ---------- GitHub intelligence ---------- */
function setCount(node, value) {
  node._target = value;
  const show = (v) => { node.textContent = nf.format(Math.round(v)); };
  if (node._shown || reduceMotion()) { node._shown = true; show(value); return; }
  if (node._pending) return;
  node._pending = true; show(0);
  onceVisible(node, () => {
    node._shown = true;
    const t0 = performance.now(), dur = 1100;
    (function step(now) {
      const p = clamp((now - t0) / dur, 0, 1), e = 1 - Math.pow(1 - p, 3);
      show(node._target * e);
      if (p < 1) requestAnimationFrame(step); else show(node._target);
    })(t0);
  }, '0px');
}

function initGithubStats() {
  const stats = $('#gh-stats'), langs = $('#gh-langs'), recent = $('#gh-recent');
  const cells = ['Repositories', 'Followers', 'Following', 'Public stars'].map((label) => {
    const strong = el('strong', { text: '—' });
    stats.append(el('div', { class: 'stat' }, strong, el('span', { text: label })));
    return strong;
  });

  gh.subscribe((s) => {
    if (s.status === 'loading') return;
    const repos = visibleRepos(s), own = repos.filter((r) => !r.fork);
    const setOrNA = (node, v) => (v == null ? (node.textContent = 'Not available') : setCount(node, v));
    setOrNA(cells[0], s.user ? s.user.public_repos : (repos.length || null));
    setOrNA(cells[1], s.user ? s.user.followers : null);
    setOrNA(cells[2], s.user ? s.user.following : null);
    setOrNA(cells[3], repos.length ? own.reduce((n, r) => n + r.stars, 0) : null);

    clear(langs);
    const counts = new Map();
    repos.forEach((r) => { if (r.language) counts.set(r.language, (counts.get(r.language) || 0) + 1); });
    if (!counts.size) langs.append(el('p', { class: 'muted', text: 'Not available' }));
    else {
      const total = Array.from(counts.values()).reduce((a, b) => a + b, 0), sorted = Array.from(counts).sort((a, b) => b[1] - a[1]);
      langs.append(
        el('div', { class: 'bar', role: 'img', 'aria-label': 'Language share by repository count' }, sorted.map(([l, n]) => el('i', { style: { width: `${(n / total) * 100}%`, background: langColor(l) }, title: l }))),
        el('ul', null, sorted.slice(0, 6).map(([l, n]) => el('li', null, el('i', { class: 'lang-dot', style: { '--lc': langColor(l) } }), l, el('b', { text: `${Math.round((n / total) * 100)}%` }))))
      );
    }

    clear(recent);
    if (!repos.length) recent.append(el('li', null, el('span', { class: 'muted', text: 'Not available' })));
    repos.slice(0, 5).forEach((r) => recent.append(el('li', null,
      el('a', { href: r.html_url, target: '_blank', rel: 'noopener noreferrer', text: r.name }),
      el('time', { datetime: r.updated_at, text: relTime(r.updated_at) }))));
  });

  loadActivity();
}

async function fetchActivityCounts() {
  const cached = lsGet('c9v:events:v1');
  if (cached && Date.now() - cached.ts < 30 * 60000) return cached.counts;
  const counts = {};
  for (let page = 1; page <= 3; page++) {
    const batch = await fetchJson(`${GH_API}/users/${encodeURIComponent(CONFIG.githubUsername)}/events/public?per_page=100&page=${page}`);
    batch.forEach((ev) => { const d = String(ev.created_at || '').slice(0, 10); if (d) counts[d] = (counts[d] || 0) + 1; });
    if (batch.length < 100) break;
  }
  lsSet('c9v:events:v1', { ts: Date.now(), counts });
  return counts;
}

function loadActivity() {
  const box = $('#gh-activity');
  if (!CONFIG.githubSyncEnabled) { box.append(el('p', { class: 'muted', text: 'Not available' })); return; }
  onceVisible(box, async () => {
    try {
      const counts = await fetchActivityCounts();
      const now = new Date(), end = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
      const grid = el('div', { class: 'heat-grid', role: 'img', 'aria-label': 'Public GitHub activity for the last 90 days' });
      let total = 0;
      const pad = new Date(end - 90 * 864e5).getUTCDay();
      for (let i = 0; i < pad; i++) grid.append(el('i', { style: { visibility: 'hidden' } }));
      for (let i = 90; i >= 0; i--) {
        const key = new Date(end - i * 864e5).toISOString().slice(0, 10), n = counts[key] || 0; total += n;
        const lvl = n === 0 ? 0 : n === 1 ? 1 : n <= 3 ? 2 : n <= 6 ? 3 : 4;
        grid.append(el('i', { 'data-l': lvl, title: `${key}: ${n} public event${n === 1 ? '' : 's'}` }));
      }
      clear(box);
      box.append(grid, el('p', { class: 'heat-note', text: total ? `${nf.format(total)} public events in the last 90 days (GitHub's public events window).` : 'No public activity in the last 90 days.' }));
    } catch {
      clear(box); box.append(el('p', { class: 'muted', text: 'Activity unavailable right now.' }));
    }
  }, '200px');
}


/* ================================================================
   Global Security Network globe (Three.js, lazy-initialised)
   Dotted land from an embedded 1.5° bitmask, Pakistan highlighted.
   Nodes and arcs are ILLUSTRATIVE — not live data.
   ================================================================ */

const GLOBE_NODES = [
  { name: 'Pakistan', lat: 30.4, lon: 69.3, hub: true },
  { name: 'Middle East', lat: 25.2, lon: 55.3 },
  { name: 'Western Europe', lat: 50.1, lon: 8.7 },
  { name: 'US East', lat: 39.0, lon: -77.5 },
  { name: 'US West', lat: 37.4, lon: -122.1 },
  { name: 'South America', lat: -23.5, lon: -46.6 },
  { name: 'Africa', lat: -1.3, lon: 36.8 },
  { name: 'South-East Asia', lat: 1.35, lon: 103.8 },
  { name: 'East Asia', lat: 35.7, lon: 139.7 },
  { name: 'Oceania', lat: -33.9, lon: 151.2 }
];
const GLOBE_ARCS = [[0, 1], [0, 2], [0, 7], [0, 8], [0, 6], [2, 3], [3, 4], [3, 5], [7, 9], [8, 4], [2, 6]];

function latLonToVec3(lat, lon, r = 1) {
  const phi = THREE.MathUtils.degToRad(lat), lam = THREE.MathUtils.degToRad(lon);
  return new THREE.Vector3(r * Math.cos(phi) * Math.sin(lam), r * Math.sin(phi), r * Math.cos(phi) * Math.cos(lam));
}
function decodeMask(b64) {
  const bin = atob(b64), out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function initGlobe() {
  const wrap = $('.globe-wrap'), canvas = $('#globe-canvas'), info = $('#globe-info'), hint = $('#globe-hint');
  if (!wrap || !canvas) return;
  if (!webglAvailable()) {
    clear(canvas.parentElement.querySelector('.globe-ui'));
    wrap.append(el('p', { class: 'globe-fallback', text: 'The interactive globe needs WebGL, which is not available in this browser.' }));
    canvas.hidden = true; return;
  }
  if (mqCoarse.matches) hint.textContent = 'Drag to rotate · use + and − to zoom';
  onceVisible(wrap, build, '250px');

  function build() {
    let renderer;
    try { renderer = new THREE.WebGLRenderer({ canvas, antialias: !isMobile(), alpha: true }); }
    catch { wrap.append(el('p', { class: 'globe-fallback', text: 'The interactive globe could not start on this device.' })); canvas.hidden = true; return; }
    renderer.setPixelRatio(PERF.dpr); renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
    let zoom = 3.6; camera.position.set(0, 0, zoom);
    const globe = new THREE.Group(); scene.add(globe);
    const dotTex = makeDotTexture();

    /* solid body hides the far side; a fresnel shell gives the atmosphere */
    globe.add(new THREE.Mesh(new THREE.SphereGeometry(0.985, 48, 48), new THREE.MeshBasicMaterial({ color: 0x030907 })));
    const atmo = new THREE.Mesh(new THREE.SphereGeometry(1.1, 48, 48), new THREE.ShaderMaterial({
      transparent: true, side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false,
      vertexShader: 'varying vec3 vN; void main(){ vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'varying vec3 vN; void main(){ float i = pow(max(0.0, 0.62 - dot(vN, vec3(0.0,0.0,1.0))), 3.0); gl_FragColor = vec4(0.0, 1.0, 0.25, 1.0) * i * 0.55; }'
    }));
    scene.add(atmo);

    /* graticule */
    const grat = [];
    for (let lat = -60; lat <= 60; lat += 30) for (let lon = 0; lon < 360; lon += 6) { grat.push(latLonToVec3(lat, lon, 1.002), latLonToVec3(lat, lon + 6, 1.002)); }
    for (let lon = 0; lon < 360; lon += 30) for (let lat = -84; lat < 84; lat += 6) { grat.push(latLonToVec3(lat, lon, 1.002), latLonToVec3(lat + 6, lon, 1.002)); }
    globe.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(grat), new THREE.LineBasicMaterial({ color: 0x00ff41, transparent: true, opacity: 0.05 })));

    /* land + Pakistan from the embedded bitmask */
    const M = GLOBE_MASK, land = decodeMask(M.land), pak = decodeMask(M.pak), stride = PERF.globeStride;
    const landPts = [], pakPts = [];
    for (let j = 0; j < M.h; j++) for (let i = 0; i < M.w; i++) {
      const k = j * M.w + i, isLand = land[k >> 3] & (1 << (k & 7)), isPak = pak[k >> 3] & (1 << (k & 7));
      if (!isLand) continue;
      const lon = -180 + (i + 0.5) * M.step, lat = 90 - (j + 0.5) * M.step;
      if (isPak) pakPts.push(latLonToVec3(lat, lon, 1.004));
      else if (i % stride === 0 && j % stride === 0) landPts.push(latLonToVec3(lat, lon, 1.003));
    }
    globe.add(new THREE.Points(new THREE.BufferGeometry().setFromPoints(landPts), new THREE.PointsMaterial({
      size: 0.021 * (stride > 1 ? 1.5 : 1), map: dotTex, color: 0x18b84a, transparent: true, opacity: 0.85, depthWrite: false
    })));
    globe.add(new THREE.Points(new THREE.BufferGeometry().setFromPoints(pakPts), new THREE.PointsMaterial({
      size: 0.034, map: dotTex, color: 0x00ff41, transparent: true, opacity: 1, depthWrite: false, blending: THREE.AdditiveBlending
    })));

    /* nodes, arcs, packets */
    const hitMeshes = [], nodeVecs = GLOBE_NODES.map((n) => latLonToVec3(n.lat, n.lon, 1.01));
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x00ff41 }), hubMat = new THREE.MeshBasicMaterial({ color: 0x9dffb5 });
    const beacons = [];
    GLOBE_NODES.forEach((n, i) => {
      const m = new THREE.Mesh(new THREE.SphereGeometry(n.hub ? 0.024 : 0.016, 12, 12), n.hub ? hubMat : nodeMat);
      m.position.copy(nodeVecs[i]); m.userData.i = i; globe.add(m);
      const hit = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), new THREE.MeshBasicMaterial({ visible: false }));
      hit.position.copy(nodeVecs[i]); hit.userData.i = i; globe.add(hit); hitMeshes.push(hit);
      const ring = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture('rgba(0,255,65,.9)', 'rgba(0,255,65,.2)'), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      ring.position.copy(nodeVecs[i]); ring.scale.setScalar(0.16); ring.userData.phase = i * 0.7; globe.add(ring); beacons.push(ring);
    });

    const arcCurves = GLOBE_ARCS.map(([a, b]) => {
      const va = nodeVecs[a].clone().normalize(), vb = nodeVecs[b].clone().normalize();
      const ang = va.angleTo(vb), pts = [];
      for (let s = 0; s <= 48; s++) {
        const t = s / 48, v = va.clone().lerp(vb, t).normalize().multiplyScalar(1.01 + Math.sin(Math.PI * t) * ang * 0.18);
        pts.push(v);
      }
      return new THREE.CatmullRomCurve3(pts);
    });
    arcCurves.forEach((c) => globe.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(c.getPoints(64)), new THREE.LineBasicMaterial({ color: 0x00ff41, transparent: true, opacity: 0.3 }))));
    const packetGeo = new THREE.BufferGeometry();
    packetGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(arcCurves.length * 3), 3));
    globe.add(new THREE.Points(packetGeo, new THREE.PointsMaterial({ size: 0.05, map: dotTex, color: 0xb6ffca, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })));

    /* floating data points */
    const fp = new Float32Array((isMobile() ? 30 : 70) * 3);
    for (let i = 0; i < fp.length; i += 3) {
      const v = new THREE.Vector3().randomDirection ? new THREE.Vector3().randomDirection() : new THREE.Vector3(Math.random() - .5, Math.random() - .5, Math.random() - .5).normalize();
      v.multiplyScalar(1.25 + Math.random() * 0.45); v.toArray(fp, i);
    }
    const floaters = new THREE.Points(new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(fp, 3)), new THREE.PointsMaterial({ size: 0.02, map: dotTex, color: 0x00ff41, transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending }));
    globe.add(floaters);

    /* orientation: face Pakistan, tilted to show the northern hemisphere */
    const rot = { y: -THREE.MathUtils.degToRad(GLOBE_NODES[0].lon), x: 0.42, vy: 0, vx: 0 };
    const still = reduceMotion();

    function resize() {
      const w = wrap.clientWidth, h = wrap.clientHeight;
      renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); draw();
    }

    /* interaction: drag rotate, buttons + click-to-enable wheel zoom, keyboard */
    let dragging = false, lx = 0, ly = 0, wheelOn = false, hoverIdx = -1;
    const setZoom = (z) => { zoom = clamp(z, 2.3, 5.2); camera.position.z = zoom; draw(); };
    canvas.addEventListener('pointerdown', (e) => {
      dragging = true; lx = e.clientX; ly = e.clientY; rot.vy = rot.vx = 0;
      canvas.setPointerCapture(e.pointerId); wheelOn = true; wrap.classList.add('is-zoomable');
      if (!mqCoarse.matches) hint.textContent = 'Drag to rotate · scroll to zoom · click outside to release';
    });
    canvas.addEventListener('pointermove', (e) => {
      if (dragging) {
        const dx = e.clientX - lx, dy = e.clientY - ly; lx = e.clientX; ly = e.clientY;
        rot.y += dx * 0.006; rot.x = clamp(rot.x + dy * 0.006, -1.2, 1.2); rot.vy = dx * 0.0006; rot.vx = 0; draw();
      } else pick(e);
    });
    const endDrag = () => { dragging = false; };
    canvas.addEventListener('pointerup', endDrag); canvas.addEventListener('pointercancel', endDrag);
    canvas.addEventListener('pointerleave', () => { if (!dragging) { hoverIdx = -1; info.hidden = true; } });
    canvas.addEventListener('wheel', (e) => { if (!wheelOn) return; e.preventDefault(); setZoom(zoom + e.deltaY * 0.0025); }, { passive: false });
    document.addEventListener('pointerdown', (e) => {
      if (wheelOn && !wrap.contains(e.target)) { wheelOn = false; wrap.classList.remove('is-zoomable'); if (!mqCoarse.matches) hint.textContent = 'Drag to rotate · click the globe to enable scroll-zoom'; }
    });
    $('#globe-zoom-in').addEventListener('click', () => setZoom(zoom - 0.4));
    $('#globe-zoom-out').addEventListener('click', () => setZoom(zoom + 0.4));
    canvas.addEventListener('keydown', (e) => {
      const k = e.key;
      if (k === 'ArrowLeft') rot.y -= 0.12; else if (k === 'ArrowRight') rot.y += 0.12;
      else if (k === 'ArrowUp') rot.x = clamp(rot.x - 0.1, -1.2, 1.2); else if (k === 'ArrowDown') rot.x = clamp(rot.x + 0.1, -1.2, 1.2);
      else if (k === '+' || k === '=') setZoom(zoom - 0.3); else if (k === '-') setZoom(zoom + 0.3); else return;
      e.preventDefault(); draw();
    });

    const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
    const pick = rafThrottle((e) => {
      const r = canvas.getBoundingClientRect();
      ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      ray.setFromCamera(ndc, camera);
      const hit = ray.intersectObjects(hitMeshes)[0];
      // ignore nodes on the far side of the planet
      let idx = -1;
      if (hit) {
        const wp = hit.object.getWorldPosition(new THREE.Vector3());
        if (wp.dot(camera.position) > 0.4) idx = hit.object.userData.i;
      }
      if (idx === hoverIdx) return;
      hoverIdx = idx;
      if (idx < 0) { info.hidden = true; return; }
      const n = GLOBE_NODES[idx]; clear(info);
      info.append(el('b', { text: n.name }), `${n.lat.toFixed(1)}°, ${n.lon.toFixed(1)}°`, el('br'), 'Illustrative node, not live data');
      info.hidden = false;
    });

    const tmp = new THREE.Vector3();
    function draw(t = 0) {
      globe.rotation.set(rot.x, rot.y, 0);
      const pos = packetGeo.attributes.position;
      arcCurves.forEach((c, i) => { c.getPoint(((t * 0.12 + i * 0.17) % 1), tmp); pos.setXYZ(i, tmp.x, tmp.y, tmp.z); });
      pos.needsUpdate = true;
      beacons.forEach((b) => { const p = (Math.sin(t * 2 + b.userData.phase) + 1) / 2; b.scale.setScalar(0.1 + p * 0.1); b.material.opacity = 0.35 + p * 0.5; });
      floaters.rotation.y = t * 0.03;
      renderer.render(scene, camera);
    }

    let running = false, visible = true, last = 0, clock = 0;
    function loop(ts) {
      if (!running) return;
      const dt = clamp((ts - last) / 1000, 0, 0.05); last = ts; clock += dt;
      if (!dragging) { rot.y += rot.vy + dt * 0.12; rot.vy *= 0.94; }
      draw(clock);
      requestAnimationFrame(loop);
    }
    const kick = () => { if (running || still || !visible || document.hidden) return; running = true; last = performance.now(); requestAnimationFrame(loop); };
    watchVisible(wrap, (v) => { visible = v; if (v) kick(); else running = false; });
    document.addEventListener('visibilitychange', () => (document.hidden ? (running = false) : kick()));

    resize();
    window.addEventListener('resize', debounce(resize, 150));
    kick();
  }
}


/* ================================================================
   Terminals, socials, contact, boot sequence, start-up
   ================================================================ */


/** Resolve once the first GitHub sync attempt has finished (or after `ms`). */
function whenSynced(ms) {
  return new Promise((resolve) => {
    if (gh.get().status !== 'loading') { resolve(); return; }
    const timer = setTimeout(() => { unsub(); resolve(); }, ms);
    const unsub = gh.subscribe((s) => { if (s.status !== 'loading') { clearTimeout(timer); unsub(); resolve(); } });
  });
}

function githubSyncLabel() {
  const s = gh.get();
  return s.status === 'live' ? ['ACTIVE', 'ok'] : s.status === 'cached' ? ['CACHED', 'warn'] : s.status === 'disabled' ? ['DISABLED', 'dim'] : s.status === 'loading' ? ['PENDING', 'warn'] : ['UNAVAILABLE', 'bad'];
}

/* ---------- Security terminal (visual only) ---------- */
function initSecurityTerminal() {
  const box = $('#sec-terminal');
  onceVisible(box, async () => {
    // give the first GitHub sync a moment so the status line is honest
    await whenSynced(2500);
    const [gs, gcls] = githubSyncLabel();
    const script = [
      { prompt: '>', text: 'system.initialize()', type: true },
      { text: '[OK] Network module', cls: 'ok' },
      { text: '[OK] Detection module', cls: 'ok' },
      { text: '[OK] Research module', cls: 'ok' },
      { text: `[${gcls === 'ok' ? 'OK' : '!!'}] GitHub synchronization`, cls: gcls },
      { text: '[OK] Security dashboard', cls: 'ok' },
      { text: '' },
      { prompt: '>', text: 'status', type: true },
      { text: 'SYSTEM: ONLINE', cls: 'ok' },
      { text: 'THREAT FEED: NOT CONNECTED (visual demo)', cls: 'dim' },
      { text: `GITHUB SYNC: ${gs}`, cls: gcls },
      { text: 'PORTFOLIO: ONLINE', cls: 'ok' },
      { prompt: '>', text: '' }
    ];
    typeLines(box, script, { speed: 34, gap: 90 });
  }, '-80px');
}

/* ---------- Socials + contact (only configured links are shown) ---------- */
function shortUrl(u) { try { const x = new URL(u); return (x.host + x.pathname).replace(/\/$/, ''); } catch { return u; } }

function initSocials() {
  const S = CONFIG.socials || {};
  const defs = [
    ['github', 'GitHub', S.github, 'github'],
    ['linktree', 'Linktree', S.linktree, 'linktree'],
    ['whatsapp', 'WhatsApp', CONFIG.whatsappEnabled ? S.whatsapp : '', 'whatsapp'],
    ['instagram', 'Instagram', S.instagram, 'instagram'],
    ['discord', 'Discord', S.discord, 'discord'],
    ['tryhackme', 'TryHackMe', S.tryhackme, 'tryhackme']
  ].filter((d) => safeUrl(d[2]));

  const grid = $('#social-grid'); clear(grid);
  defs.forEach(([, name, url, icon], i) => grid.append(
    el('a', { class: 'panel social-card', href: url, target: '_blank', rel: 'noopener noreferrer', 'data-tilt': '', 'data-reveal': 'rotate', style: { transitionDelay: `${i * 70}ms` }, 'aria-label': `${name} (opens in a new tab)` },
      brandIcon(icon), el('div', null, el('strong', { text: name }), el('span', { text: shortUrl(url) })))
  ));

  const term = $('#contact-terminal'); clear(term);
  const rows = defs.filter((d) => ['github', 'linktree', 'whatsapp'].includes(d[0])).map(([, name, url]) => [name.toLowerCase(), url]);
  const mail = CONFIG.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONFIG.email) ? CONFIG.email : '';
  if (mail) rows.push(['email', `mailto:${mail}`]);
  term.append(el('p', null, el('span', { class: 'prompt', text: '$' }), 'contact --list'));
  rows.forEach(([k, v]) => term.append(el('p', { class: 'out' }, el('span', { class: 'key', text: k.padEnd(9, ' ') }), el('a', { href: v, target: v.startsWith('mailto:') ? null : '_blank', rel: 'noopener noreferrer', text: v.replace(/^mailto:/, '') }))));
  term.append(el('p', null, el('span', { class: 'prompt', text: '$' }), el('span', { class: 'caret', 'aria-hidden': 'true' })));
  // keep the .term-body pre-formatting so the key column lines up
  term.style.whiteSpace = 'pre-wrap';

  $$('[data-config-link="githubUrl"]').forEach((a) => { const u = safeUrl(CONFIG.githubUrl); if (u) a.href = u; });
}

/* ---------- Hero intro ---------- */
function scrambleText(node, finalText, ms = 800) {
  if (reduceMotion()) return;
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&*+', t0 = performance.now();
  (function step(now) {
    const p = clamp((now - t0) / ms, 0, 1), reveal = Math.floor(p * finalText.length);
    node.textContent = finalText.split('').map((c, i) => (c === ' ' || i < reveal) ? c : chars[(Math.random() * chars.length) | 0]).join('');
    if (p < 1) requestAnimationFrame(step); else node.textContent = finalText;
  })(t0);
}
function heroIntro() {
  $$('#hero-name span[data-text]').forEach((s, i) => setTimeout(() => scrambleText(s, s.dataset.text, 750), i * 140));
  const kids = $$('.hero-inner > :not(.hero-name)');
  if (window.gsap && !reduceMotion()) {
    gsap.from(kids, { opacity: 0, y: 18, duration: 0.8, ease: 'power3.out', stagger: 0.09, delay: 0.15, clearProps: 'all' });
  }
}

/* ---------- Boot sequence (honest: each line reflects real state) ---------- */
async function runBoot(heroResultPromise) {
  const boot = $('#boot'), log = $('#boot-log'), fin = $('#boot-final'), skip = $('#boot-skip');
  const seen = sessionStorage.getItem('c9v:booted');
  if (seen || reduceMotion()) { boot.hidden = true; return; }
  boot.hidden = false;
  let skipped = false;
  skip.addEventListener('click', () => { skipped = true; });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') skipped = true; }, { once: true });
  const line = async (text, ok = true) => {
    if (skipped) return;
    log.append(el('li', { class: ok ? '' : 'warn' }, el('span', { class: 'tick', text: ok ? '[✓]' : '[!]' }), text));
    await wait(230);
  };
  await line('Identity loaded');
  await line('Security modules loaded');
  const hero = await Promise.race([heroResultPromise, wait(2500).then(() => null)]);
  await line(hero && hero.mode === 'webgl' ? '3D environment loaded' : '3D environment: 2D fallback active', !!(hero && hero.mode === 'webgl'));
  await whenSynced(2200);
  const s = gh.get();
  await line(s.status === 'live' ? 'GitHub connection loaded' : s.status === 'cached' ? 'GitHub unreachable: using cache' : s.status === 'loading' ? 'GitHub connection: syncing in background' : 'GitHub connection unavailable', s.status === 'live');
  const count = visibleRepos(s).length;
  await line(s.repos.length || s.status === 'live' ? `Project database synchronized (${count})` : 'Project database not synchronized', !!(s.repos.length || s.status === 'live'));
  if (!skipped) {
    fin.append('ACCESS GRANTED', el('b', { text: 'WELCOME, VISITOR.' }));
    await wait(650);
  }
  sessionStorage.setItem('c9v:booted', '1');
  boot.classList.add('is-done');
  setTimeout(() => { boot.hidden = true; }, 700);
}

/* ---------- Start ---------- */
function start() {
  document.documentElement.classList.add('js');
  $('#boot').hidden = !!sessionStorage.getItem('c9v:booted') || reduceMotion();

  renderSpecializations();
  initSocials();
  initResearch();
  initSyncStatus();
  initProjects();
  initTools();
  initGithubStats();
  initModal();
  initSecurityTerminal();
  initNav();
  initCursor();
  initBackground();
  initSkillMap();
  initGlobe();
  initTilt(); initReveal();

  const heroReady = initHero().catch(() => ({ mode: 'none' }));
  syncGithub();
  runBoot(heroReady).then(heroIntro);

  // refresh "updated x ago" labels and re-sync quietly when the tab regains focus after a long time
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && Date.now() - (gh.get().at || 0) > Math.max(1, CONFIG.cacheMinutes) * 60000) syncGithub();
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();

})();
