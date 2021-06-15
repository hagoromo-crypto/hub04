import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../0ee46c79-338c-445a-a506-ea26d80fbe46/src/item"
import Script2 from "../7e78cd70-5414-4ec4-be5f-198ec9879a5e/src/item"
import Script3 from "../3f3fe65b-c648-44bc-8781-c2a40bc95bb4/src/item"
import Script4 from "../f89ab04f-46ef-42ea-912b-b194eb8d2f02/src/item"
import Script5 from "../8bd080c9-9954-43b2-a6ac-0b0913d298c0/src/item"
import Script6 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const nft = new Entity('nft')
engine.addEntity(nft)
nft.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(14.330123901367188, 4.554339408874512, 13.405502319335938),
  rotation: new Quaternion(-0.001005810685455799, -0.44960516691207886, 0.0019982843659818172, -0.8932246565818787),
  scale: new Vector3(3.6887784004211426, 3.3749966621398926, 1.9494471549987793)
})
nft.addComponentOrReplace(transform2)
const nftShape = new NFTShape("ethereum://0x5d00d312e171be5342067c09bae883f9bcb2003b/30574")
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true
nftShape.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft.addComponentOrReplace(nftShape)

const nft2 = new Entity('nft2')
engine.addEntity(nft2)
nft2.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(15, 1, 11),
  rotation: new Quaternion(-3.690772002389953e-15, -0.5555702447891235, 6.622913417686505e-8, -0.8314695954322815),
  scale: new Vector3(3.4590659141540527, 3.2804837226867676, 1.7825266122817993)
})
nft2.addComponentOrReplace(transform3)
const nftShape2 = new NFTShape("ethereum://0x5d00d312e171be5342067c09bae883f9bcb2003b/25255")
nftShape2.withCollisions = true
nftShape2.isPointerBlocker = true
nftShape2.visible = true
nftShape2.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft2.addComponentOrReplace(nftShape2)

const nft6 = new Entity('nft6')
engine.addEntity(nft6)
nft6.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(11, 1, 14.5),
  rotation: new Quaternion(-7.0243628691457616e-9, 0.09801711142063141, 1.457097886792269e-9, 0.9951847791671753),
  scale: new Vector3(3.750020980834961, 3, 1.0000057220458984)
})
nft6.addComponentOrReplace(transform4)
const nftShape3 = new NFTShape("ethereum://0x5d00d312e171be5342067c09bae883f9bcb2003b/25236")
nftShape3.withCollisions = true
nftShape3.isPointerBlocker = true
nftShape3.visible = true
nftShape3.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft6.addComponentOrReplace(nftShape3)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseSand_01/FloorBaseSand_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform5)

const teleport2 = new Entity('teleport2')
engine.addEntity(teleport2)
teleport2.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(8.51138687133789, 0, 15.249903678894043),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport2.addComponentOrReplace(transform6)

const teleport3 = new Entity('teleport3')
engine.addEntity(teleport3)
teleport3.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(7.011386871337891, 0, 15.249903678894043),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport3.addComponentOrReplace(transform7)

const teleport4 = new Entity('teleport4')
engine.addEntity(teleport4)
teleport4.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(5.511387348175049, 0, 15.249903678894043),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport4.addComponentOrReplace(transform8)

const teleport5 = new Entity('teleport5')
engine.addEntity(teleport5)
teleport5.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(4.011387348175049, 0, 15.249903678894043),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport5.addComponentOrReplace(transform9)

const teleport6 = new Entity('teleport6')
engine.addEntity(teleport6)
teleport6.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(2.488612651824951, 0, 15.250290870666504),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport6.addComponentOrReplace(transform10)

const tree = new Entity('tree')
engine.addEntity(tree)
tree.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(13.879593849182129, 0, 13.975139617919922),
  rotation: new Quaternion(1.7912677956454784e-15, -0.1950903683900833, 2.3256582437625184e-8, -0.9807853102684021),
  scale: new Vector3(1.0000014305114746, 1.4992398023605347, 1.0000014305114746)
})
tree.addComponentOrReplace(transform11)
const gltfShape2 = new GLTFShape("models/HWN20_Tree_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
tree.addComponentOrReplace(gltfShape2)

const signpostTree = new Entity('signpostTree')
engine.addEntity(signpostTree)
signpostTree.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(5.5, 1.6090991497039795, 15.750097274780273),
  rotation: new Quaternion(6.691670821108589e-15, -1, 1.1920927533992653e-7, -7.450580596923828e-8),
  scale: new Vector3(4.153737545013428, 3.49953031539917, 1)
})
signpostTree.addComponentOrReplace(transform12)

const teleport7 = new Entity('teleport7')
engine.addEntity(teleport7)
teleport7.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(14.750290870666504, 3.5762786865234375e-7, 8.51138687133789),
  rotation: new Quaternion(8.860399791456633e-16, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport7.addComponentOrReplace(transform13)

const signpostTree2 = new Entity('signpostTree2')
engine.addEntity(signpostTree2)
signpostTree2.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(15.250097274780273, 1.446375846862793, 5.499999046325684),
  rotation: new Quaternion(1.1837153300739076e-14, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(4.153737545013428, 3.49953031539917, 1)
})
signpostTree2.addComponentOrReplace(transform14)

const teleport8 = new Entity('teleport8')
engine.addEntity(teleport8)
teleport8.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(14.749903678894043, 2.384185791015625e-7, 6.988611698150635),
  rotation: new Quaternion(8.860399791456633e-16, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport8.addComponentOrReplace(transform15)

const teleport9 = new Entity('teleport9')
engine.addEntity(teleport9)
teleport9.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(14.749903678894043, 5.960464477539063e-8, 5.488612174987793),
  rotation: new Quaternion(8.860399791456633e-16, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport9.addComponentOrReplace(transform16)

const teleport10 = new Entity('teleport10')
engine.addEntity(teleport10)
teleport10.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(14.749903678894043, 0, 3.988612174987793),
  rotation: new Quaternion(8.860399791456633e-16, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport10.addComponentOrReplace(transform17)

const teleport11 = new Entity('teleport11')
engine.addEntity(teleport11)
teleport11.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(14.749902725219727, 0, 2.488612413406372),
  rotation: new Quaternion(8.860399791456633e-16, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.5099999308586121, 0.5, 0.4999999701976776)
})
teleport11.addComponentOrReplace(transform18)

const signpostRoot = new Entity('signpostRoot')
engine.addEntity(signpostRoot)
signpostRoot.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(13.828818321228027, 0, 13.831282615661621),
  rotation: new Quaternion(-3.093649138201219e-16, -0.917698860168457, 1.0939822203681615e-7, 0.3972768783569336),
  scale: new Vector3(1.6913472414016724, 1.5, 1.3086626529693604)
})
signpostRoot.addComponentOrReplace(transform19)

const twitterButtonLink = new Entity('twitterButtonLink')
engine.addEntity(twitterButtonLink)
twitterButtonLink.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(13, 0.5, 14),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
twitterButtonLink.addComponentOrReplace(transform20)

const discordButtonLink = new Entity('discordButtonLink')
engine.addEntity(discordButtonLink)
discordButtonLink.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(13.653517723083496, 0.5, 13.377012252807617),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
discordButtonLink.addComponentOrReplace(transform21)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(14.28180980682373, 0.5598124861717224, 12.799405097961426),
  rotation: new Quaternion(-2.220446049250313e-16, 0.3826834559440613, -4.561941935321556e-8, 0.9238795638084412),
  scale: new Vector3(1, 1, 1)
})
externalLink.addComponentOrReplace(transform22)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script1.spawn(teleport2, {"x":"-48","y":"-57","name":""}, createChannel(channelId, teleport2, channelBus))
script1.spawn(teleport3, {"x":"105","y":"-24","name":""}, createChannel(channelId, teleport3, channelBus))
script1.spawn(teleport4, {"x":"-5","y":"-120","name":""}, createChannel(channelId, teleport4, channelBus))
script1.spawn(teleport5, {"x":"142","y":"-59","name":""}, createChannel(channelId, teleport5, channelBus))
script1.spawn(teleport6, {"x":"137","y":"-23","name":""}, createChannel(channelId, teleport6, channelBus))
script2.spawn(signpostTree, {"text":"\nEthermon Wild-grass\nLEGENDARY locations","fontSize":30}, createChannel(channelId, signpostTree, channelBus))
script1.spawn(teleport7, {"x":"49","y":"-91","name":""}, createChannel(channelId, teleport7, channelBus))
script2.spawn(signpostTree2, {"text":"\nEthermon Wild-grass\nLEGENDARY locations","fontSize":30}, createChannel(channelId, signpostTree2, channelBus))
script1.spawn(teleport8, {"x":"58","y":"-24","name":""}, createChannel(channelId, teleport8, channelBus))
script1.spawn(teleport9, {"x":"","y":"","name":""}, createChannel(channelId, teleport9, channelBus))
script1.spawn(teleport10, {"x":"","y":"","name":""}, createChannel(channelId, teleport10, channelBus))
script1.spawn(teleport11, {"x":"","y":"","name":""}, createChannel(channelId, teleport11, channelBus))
script3.spawn(signpostRoot, {"text":"Ethermon\nHub","fontSize":30}, createChannel(channelId, signpostRoot, channelBus))
script4.spawn(twitterButtonLink, {"url":"hagoromo_crypto","bnw":false,"name":"land owner"}, createChannel(channelId, twitterButtonLink, channelBus))
script5.spawn(discordButtonLink, {"url":"/channels/621641798686867466/751853486790017124","bnw":false,"name":"Ethermon"}, createChannel(channelId, discordButtonLink, channelBus))
script6.spawn(externalLink, {"url":"ethermon.io","name":"Ethermon.io"}, createChannel(channelId, externalLink, channelBus))