<a name="rfqKk"></a>
# 安装
```powershell
yarn add qiankun # 或者 npm i qiankun -S
```
<a name="YxZ2C"></a>
# 在主应用中注册微应用
```powershell
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: '//localhost:7100',
    container: '#yourContainer',
    activeRule: '/yourActiveRule',
  },
  {
    name: 'vue app',
    entry: { scripts: ['//localhost:7100/main.js'] },
    container: '#yourContainer2',
    activeRule: '/yourActiveRule2',
  },
]);

start();
```

<a name="V5dd2"></a>
# 手动加载微应用的方式
```powershell
import { loadMicroApp } from 'qiankun';

loadMicroApp({
  name: 'app',
  entry: '//localhost:7100',
  container: '#yourContainer',
});
```

Vue微
