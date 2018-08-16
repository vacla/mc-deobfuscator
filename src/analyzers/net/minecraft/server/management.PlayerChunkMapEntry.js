import * as CLASS from '../../../../ClassNames'

export function method (methodInfo) {
  if (methodInfo.origName === '<init>' && methodInfo.args.length === 3) {
    methodInfo.clsInfo.info.class[methodInfo.args[0].getClassName()].name = CLASS.PLAYER_CHUNK_MAP
  }
}

export function field (field, clsInfo, info) {
  const sig = field.getType().getSignature()
  const Chunk = info.classReverse[CLASS.CHUNK]
  const ChunkPos = info.classReverse[CLASS.CHUNK_POS]
  const PlayerChunkMap = info.classReverse[CLASS.PLAYER_CHUNK_MAP]
  if (!Chunk || !ChunkPos || !PlayerChunkMap) clsInfo.done = false
  if (Chunk && sig === 'L' + Chunk + ';') return 'chunk'
  if (ChunkPos && sig === 'L' + ChunkPos + ';') return 'pos'
  if (PlayerChunkMap && sig === 'L' + PlayerChunkMap + ';') return 'map'
  switch (sig) {
    case '[S': return 'changedBlocks'
    case 'J': return 'lastUpdateInhabitedTime'
    case 'Z': return 'sentToPlayers'
    case 'Ljava/util/List;': return 'players'
  }
}