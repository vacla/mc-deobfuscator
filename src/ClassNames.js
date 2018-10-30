// @flow
import * as PKG from './PackageNames'
export const MINECRAFT = PKG.CLIENT + '.Minecraft'
export const BOOTSTRAP = PKG.DATA + '.Bootstrap'
export const BIOMES = PKG.DATA + '.Biomes'
export const BLOCKS = PKG.DATA + '.Blocks'
export const BLOCK = PKG.BLOCK + '.Block'
export const BLOCK_PROPERTIES = PKG.DATA + '.BlockProperties'
export const ITEMS = PKG.DATA + '.Items'
export const ITEM = PKG.ITEM + '.Item'
export const ITEM$BUILDER = ITEM + '$Builder'
export const ENCHANTMENTS = PKG.DATA + '.Enchantments'
export const ENCHANTMENT = PKG.ENCHANTMENT + '.Enchantment'
export const ENTITIES = PKG.DATA + '.EntityType'
export const ENTITIES$BUILDER = ENTITIES + '$Builder'
export const MOB_EFFECTS = PKG.DATA + '.MobEffects'
export const MOB_EFFECT = PKG.POTION + '.MobEffect'
export const PARTICLES = PKG.DATA + '.Particles'
export const POTIONS = PKG.DATA + '.Potions'
export const POTION = PKG.POTION + '.Potion'
export const SOUNDS = PKG.DATA + '.Sounds'
export const SOUND = PKG.SOUND + '.Sound'
export const FLUIDS = PKG.DATA + '.Fluids'
export const FLUID = PKG.FLUID + '.Fluid'
export const COMMAND_ARGUMENTS = PKG.DATA + '.CommandArguments'
export const ADVANCEMENT_CRITERIA = PKG.DATA + '.AdvancementCriteria'
export const STATISTICS = PKG.DATA + '.Statistics'
export const BLOCK$BUILDER = BLOCK + '$Builder'
export const BLOCK_JUKEBOX = PKG.BLOCK + '.Jukebox'
export const MATERIAL = PKG.MATERIAL + '.Material'
export const MATERIAL$BUILDER = MATERIAL + '$Builder'
export const MAP_COLOR = PKG.MATERIAL + '.MapColor'
export const BLOCK_STATE = PKG.BLOCK_STATE + '.BlockState'
export const BLOCK_BEHAVIORS = PKG.BLOCK_STATE + '.BlockBehaviors'
export const BLOCK_PROPERTY_CONTAINER = PKG.BLOCK_STATE + '.PropertyContainer'
export const ITEM_STACK = PKG.ITEM + '.ItemStack'
export const ABSTRACT_CLIENT_PLAYER = PKG.CLIENT_ENTITY + '.AbstractPlayer'
export const ENTITY = PKG.ENTITY + '.Entity'
export const ENTITY_AGING = PKG.ENTITY + '.EntityAging'
export const ENTITY_LIVING = PKG.ENTITY + '.Living'
export const ENTITY_LIVING_BASE = PKG.ENTITY + '.LivingBase'
export const ENTITY_CREATURE = PKG.ENTITY + '.Creature'
export const ENTITY_MOB = PKG.ENTITY_MONSTER + '.Mob'
export const ENTITY_HANGING = PKG.ENTITY + '.EntityHanging'
export const IRON_GOLEM = PKG.ENTITY_PASSIVE + '.IronGolem'
export const ENTITY_GOLEM = PKG.ENTITY_PASSIVE + '.Golem'
export const ENTITY_MINECART = PKG.ENTITY_ITEM + '.MinecartBase'
export const ENTITY_MINECART_FURNACE = PKG.ENTITY_ITEM + '.MinecartFurnace'
export const ENTITY_MINECART_HOPPER = PKG.ENTITY_ITEM + '.MinecartHopper'
export const ENTITY_MINECART_TNT = PKG.ENTITY_ITEM + '.MinecartTNT'
export const ENTITY_TAMEABLE = PKG.ENTITY_PASSIVE + '.EntityTameable'
export const ENTITY_BREEDABLE = PKG.ENTITY_PASSIVE + '.EntityBreedable'
export const ENTITY_ABSTRACT_HORSE = PKG.ENTITY_PASSIVE + '.AbstractHorse'
export const ENTITY_CHESTED_HORSE = PKG.ENTITY_PASSIVE + '.ChestedHorse'
export const ENTITY_SPELLCASTING_ILLAGER = PKG.ENTITY_MONSTER + '.SpellcastingIllager'
export const ENTITY_ABSTRACT_ARROW = PKG.ENTITY_PROJECTILE + '.ArrowBase'
export const ENTITY_ABSTRACT_PROJECTILE = PKG.ENTITY_PROJECTILE + '.Projectile'
export const ENTITY_THROWABLE = PKG.ENTITY_PROJECTILE + '.Throwable'
export const WORLD = PKG.WORLD + '.World'
export const SERVER_WORLD = PKG.SERVER_WORLD + '.ServerWorld'
export const CLIENT_WORLD = PKG.CLIENT_WORLD + '.ClientWorld'
export const WORLD_GENERATOR = PKG.WORLD_GEN + '.WorldGenerator'
export const WORLD_GEN_FOSSILS = PKG.WORLD_GEN_FEATURE + '.Fossils'
export const BIOME = PKG.BIOME + '.Biome'
export const BIOME$BIOME_BUILDER = BIOME + '$BiomeBuilder'
export const BIOME$PRECIPITATION = BIOME + '$Precipitation'
export const BIOME$CATEGORY = 'Category'
export const GUI = PKG.GUI + '.Gui'
export const GUI_SCREEN = PKG.MENU + '.GuiScreen'
export const GUI_MAIN_MENU = PKG.MENU + '.MainMenu'
export const GUI_SELECT_WORLD = PKG.MENU_WORLD + '.SelectWorld'
export const GUI_MULTIPLAYER = PKG.MENU_MULTIPLAYER + '.Multiplayer'
export const NBT_BASE = PKG.NBT + '.NBTBase'
export const NBT_PRIMITIVE = PKG.NBT + '.NBTPrimitive'
export const NBT_COMPOUND = PKG.NBT + '.NBTCompound'
export const NBT_LIST = PKG.NBT + '.NBTList'
export const NBT_COMPRESSED = PKG.NBT + '.NBTCompressed'
export const TEXT_FORMATTING = PKG.TEXT + '.TextFormatting'
export const TESSELATOR = PKG.RENDER + '.Tessellator'
export const RENDER_GLOBAL = PKG.RENDER + '.RenderGlobal'
export const RENDER_ITEM = PKG.RENDER + '.RenderItem'
export const RENDER_ENTITY = PKG.RENDER_ENTITY + '.RenderEntity'
export const RENDER_ARROW = PKG.RENDER_ENTITY + '.RenderArrow'
export const RENDER_BOAT = PKG.RENDER_ENTITY + '.RenderBoat'
export const RENDER_PAINTING = PKG.RENDER_ENTITY + '.RenderPainting'
export const ENTITY_RENDERER = PKG.RENDER + '.EntityRenderer'
export const ENTITY_PLAYER_BASE = PKG.PLAYER + '.Player'
export const SERVER_PLAYER = PKG.PLAYER + '.ServerPlayer'
export const I18N = PKG.RESOURCES + '.I18n'
export const I18N_LOCALE = PKG.RESOURCES + '.Locale'
export const GAME_SETTINGS = PKG.CLIENT_SETTINGS + '.GameSettings'
export const GAME_SETTINGS_OPTION = PKG.CLIENT_SETTINGS + '.GameSettingsOption'
export const KEY_BINDING = PKG.CLIENT_SETTINGS + '.KeyBinding'
export const PACKET = PKG.NETWORK + '.Packet'
export const PACKET_BUFFER = PKG.NETWORK + '.PacketBuffer'
export const CONNECTION_STATE = PKG.NETWORK + '.ConnectionState'
export const PACKET_DIRECTION = PKG.NETWORK + '.PacketDirection'
export const BLOCK_ENTITY = PKG.BLOCK_ENTITY + '.BlockEntity'
export const BLOCK_ENTITY_HOPPER = PKG.BLOCK_ENTITY + '.HopperBlockEntity'
export const CHUNK = PKG.CHUNK + '.Chunk'
export const CHUNK_LOADER = PKG.CHUNK_STORAGE + '.ChunkLoader'
export const ALPHA_CHUNK_LOADER = PKG.CHUNK_STORAGE + '.AlphaChunkLoader'
export const REGION_CHUNK_LOADER = PKG.CHUNK_STORAGE + '.RegionChunkLoader'
export const ANVIL_CHUNK_LOADER = PKG.CHUNK_STORAGE + '.AnvilChunkLoader'
export const ANVIL_SAVE_CONVERTER = PKG.CHUNK_STORAGE + '.AnvilSaveConverter'
export const PROFILER = PKG.PROFILER + '.Profiler'
export const AABB = PKG.MATH + '.AABB'
export const THREAD_IMAGE_DOWNLOAD = PKG.RESOURCES + '.ThreadImageDownload'
export const RESOURCE_DOWNLOAD_THREAD = PKG.RESOURCES + '.ThreadResourceDownload'
export const BLOCK_MODEL_BAKERY = PKG.BLOCK_MODEL + '.BlockModelBakery'
export const LOOT_TABLE = PKG.LOOT + '.LootTable'
export const LOOT_ENTRY = PKG.LOOT + '.LootEntry'
export const LOOT_TABLES = PKG.LOOT + '.LootTables'
export const BLOCK_POS = PKG.MATH + '.BlockPos'
export const BLOCK_POS$MUTABLE_BLOCK_POS = BLOCK_POS + '$MutableBlockPos'
export const BLOCK_POS$POOLED_MUTABLE_BLOCK_POS = BLOCK_POS + '$PooledMutableBlockPos'
export const CHUNK_POS = PKG.MATH + '.ChunkPos'
export const VEC_2F = PKG.MATH + '.Vec2f'
export const VEC_3D = PKG.MATH + '.Vec3d'
export const VEC_3I = PKG.MATH + '.Vec3i'
export const MATH_HELPER = PKG.MATH + '.MathHelper'
export const WORLD_TYPE = PKG.WORLD + '.WorldType'
export const WORLD_STATE = PKG.WORLD + '.WorldState'
export const DATAFIX_BLOCK_ENTITY_TAG = PKG.DATAFIX_WALKER + '.BlockEntityTag'
export const VILLAGE = PKG.VILLAGE + '.Village'
export const VILLAGE_COLLECTION = PKG.VILLAGE + '.VillageCollection'
export const WORLD_SAVE_DATA = PKG.WORLD + '.WorldSaveData'
export const FONT_METADATA_SECTION_SERIALIZER = PKG.RESOURCES_DATA + '.FontMetadataSectionSerializer'
export const SOUND_SYSTEM = PKG.SOUND + '.SoundSystem'
export const RESOURCE_LOCATION = PKG.UTIL + '.Identifier'
export const REGISTRY = PKG.REGISTRY + '.Registry'
export const SIMPLE_REGISTRY = PKG.REGISTRY + '.SimpleRegistry'
export const DEFAULTED_MAPPED_REGISTRY = PKG.REGISTRY + '.DefaultedMappedRegistry'
export const MAP_DATA = PKG.WORLD_STORAGE + '.MapData'
export const WORLD_CLIENT = PKG.CLIENT_MULTIPLAYER + '.WorldClient'
export const RESOURCE_PACK_REPOSITORY = PKG.RESOURCES + '.ResourcePackRepository'
export const NET_PLAYER_HANDLER = PKG.NETWORK + '.PlayerHandler'
export const OPENGL_HELPER = PKG.RENDER + '.OpenGLHelper'
export const COMMAND = PKG.COMMAND + '.Command'
export const OCEAN_MONUMENT_PIECES = PKG.STRUCTURE + '.OceanMonumentPieces'
export const SCOREBOARD = PKG.SCOREBOARD + '.Scoreboard'
export const MODEL_ROTATION = PKG.BLOCK_MODEL + '.ModelRotation'
export const INTEGRATED_SERVER = PKG.INTEGRATED_SERVER + '.IntegratedServer'
export const INTEGRATED_PLAYER_LIST = PKG.INTEGRATED_SERVER + '.IntegratedPlayerList'
export const PLAYER_LIST = PKG.SERVER + '.PlayerList'
export const BAN_DETAIL = PKG.SERVER + '.BanDetail'
export const INT_HASH_MAP = PKG.UTIL + '.IntHashMap'
export const WORLD_INFO = PKG.WORLD + '.WorldInfo'
export const ENTITY_SPAWNER = PKG.WORLD + '.EntitySpawner'
export const GEN_LAYER = PKG.WORLD_GEN_LAYER + '.GenLayer'
export const GEN_LAYER_HILLS = PKG.WORLD_GEN_LAYER + '.GenLayerHills'
export const BIOME_PROVIDER = PKG.BIOME + '.BiomeProvider'
export const DIFFICULTY = PKG.WORLD + '.Difficulty'
export const GAME_RULES = PKG.WORLD + '.GameRules'
export const DATA_GENERATOR = PKG.DATA + '.DataGenerator'
export const DATA_PROVIDER = PKG.DATA + '.DataProvider'
export const PATH_NODE_TYPE = PKG.PATHFINDING + '.PathNodeType'
export const BOSS_INFO = PKG.WORLD + '.BossInfo'
export const BOSS_INFO$COLOR = BOSS_INFO + '$Color'
export const BOSS_INFO$OVERLAY = BOSS_INFO + '$Overlay'
export const GAME_MODE = PKG.WORLD + '.GameMode'
export const CRAFTING_RECIPE = PKG.RECIPE + '.CraftingRecipe'
export const SMELTING_RECIPE = PKG.RECIPE + '.SmeltingRecipe'
export const DIMENSION_TYPE = PKG.WORLD + '.DimensionType'
export const ACTION_RESULT = PKG.UTIL + '.ActionResult'
export const ADVANCEMENT_FRAME_TYPE = PKG.ADVANCEMENTS + '.FrameType'
export const ROTATION = PKG.UTIL + '.Rotation'
export const ADVANCEMENT_TAB_TYPE = PKG.GUI_ADVANCEMENTS + '.TabType'
export const RARITY = PKG.ITEM + '.Rarity'
export const CREATURE_TYPE = PKG.ENTITY + '.CreatureType'
export const DYE_COLOR = PKG.ITEM + '.DyeColor'
export const NOTE_BLOCK_INSTRUMENT = PKG.BLOCK + '.NoteBlockInstrument'
export const CHUNK_PROVIDER_SERVER = PKG.CHUNK + '.ChunkProviderServer'
export const CHUNK_PROVIDER = PKG.CHUNK + '.ChunkProvider'
export const CHUNK_STAGE = PKG.CHUNK + '.ChunkStatus'
export const CHUNK_STAGE$TYPE = CHUNK_STAGE + '$Type'
export const BATCH_PROCESSOR = PKG.UTIL + '.BatchProcessor'
export const HOPPER_BASE = PKG.BLOCK_ENTITY + '.HopperBase'
export const TICKABLE = PKG.UTIL + '.Tickable'
export const LOCKABLE_LOOT_CONTAINER = PKG.BLOCK_ENTITY + '.LockableLootContainer'
export const ITEMIZABLE = PKG.ITEM + '.Itemizable'
export const BORDER_STATUS = PKG.WORLD_BORDER + '.BorderStatus'
export const STRUCTURE_BLOCK_MODE = PKG.BLOCK_ENTITY + '.StructureBlockMode'
export const HORSE_ARMOR_TYPE = PKG.ENTITY_PASSIVE + '.HorseArmorType'
export const ITEM$TOOL_MATERIAL = ITEM + '$ToolMaterial'
export const TOOL_MATERIAL = PKG.ITEM + '.ToolMaterial'
export const INGREDIENT = PKG.RECIPE + '.Ingredient'
export const CACHING_SUPPLIER = PKG.UTIL + '.CachingSupplier'
export const DEDICATED_SERVER = PKG.DEDICATED_SERVER + '.DedicatedServer'
export const THE_FLATTENING_BLOCK_STATES = PKG.DATAFIX_SCHEMAS + '.TheFlatteningBlockStateMap'
export const DATA_PROVIDER_FLUID_TAGS = PKG.DATA_PROVIDER + '.FluidTags'
export const DATA_PROVIDER_BLOCK_TAGS = PKG.DATA_PROVIDER + '.BlockTags'
export const DATA_PROVIDER_ITEM_TAGS = PKG.DATA_PROVIDER + '.ItemTags'
export const DATA_PROVIDER_SNBT_TO_NBT = PKG.DATA_PROVIDER + '.SNBTtoNBT'
export const DATA_PROVIDER_NBT_TO_SNBT = PKG.DATA_PROVIDER + '.NBTtoSNBT'
export const DATA_PROVIDER_ADVANCEMENTS = PKG.DATA_PROVIDER + '.Advancements'
export const DATA_PROVIDER_RECIPES = PKG.DATA_PROVIDER + '.Recipes'
export const DATA_PROVIDER_BLOCKS = PKG.DATA_PROVIDER + '.Blocks'
export const DATA_PROVIDER_ITEMS = PKG.DATA_PROVIDER + '.Items'
export const DATA_PROVIDER_COMMANDS = PKG.DATA_PROVIDER + '.Commands'
export const CRASH_REPORT = PKG.CRASH + '.CrashReport'
export const CRASH_REPORT_DETAIL = PKG.CRASH + '.CrashReportDetail'
export const ARGUMENT_PLAYER = PKG.COMMAND_ARGUMENT + '.ArgumentPlayer'
export const ARGUMENT_ENTITY = PKG.COMMAND_ARGUMENT + '.ArgumentEntity'
export const ARGUMENT_BLOCKPOS = PKG.COMMAND_ARGUMENT + '.ArgumentBlockPos'
export const ARGUMENT_VEC3 = PKG.COMMAND_ARGUMENT + '.ArgumentVec3'
export const ARGUMENT_VEC2 = PKG.COMMAND_ARGUMENT + '.ArgumentVec2'
export const ARGUMENT_BLOCK_STATE = PKG.COMMAND_ARGUMENT + '.ArgumentBlockState'
export const ARGUMENT_BLOCK_PREDICATE = PKG.COMMAND_ARGUMENT + '.ArgumentBlockPredicate'
export const ARGUMENT_ITEM_STACK = PKG.COMMAND_ARGUMENT + '.ArgumentItemStack'
export const ARGUMENT_ITEM_PREDICATE = PKG.COMMAND_ARGUMENT + '.ArgumentItemPredicate'
export const ARGUMENT_COLOR = PKG.COMMAND_ARGUMENT + '.ArgumentColor'
export const ARGUMENT_COMPONENT = PKG.COMMAND_ARGUMENT + '.ArgumentComponent'
export const ARGUMENT_MESSAGE = PKG.COMMAND_ARGUMENT + '.ArgumentMessage'
export const ARGUMENT_NBT = PKG.COMMAND_ARGUMENT + '.ArgumentNBT'
export const ARGUMENT_NBT_PATH = PKG.COMMAND_ARGUMENT + '.ArgumentNBTPath'
export const ARGUMENT_OBJECTIVE = PKG.COMMAND_ARGUMENT + '.ArgumentObjective'
export const ARGUMENT_OBJECTIVE_CRITERIA = PKG.COMMAND_ARGUMENT + '.ArgumentObjectiveCriteria'
export const ARGUMENT_OPERATION = PKG.COMMAND_ARGUMENT + '.ArgumentOperation'
export const ARGUMENT_PARTICLE = PKG.COMMAND_ARGUMENT + '.ArgumentParticle'
export const ARGUMENT_ROTATION = PKG.COMMAND_ARGUMENT + '.ArgumentRotation'
export const ARGUMENT_SCOREBOARD_SLOT = PKG.COMMAND_ARGUMENT + '.ArgumentScoreboardSlot'
export const ARGUMENT_SCORE_HOLDER = PKG.COMMAND_ARGUMENT + '.ArgumentScoreHolder'
export const ARGUMENT_SWIZZLE = PKG.COMMAND_ARGUMENT + '.ArgumentSwizzle'
export const ARGUMENT_TEAM = PKG.COMMAND_ARGUMENT + '.ArgumentTeam'
export const ARGUMENT_ITEM_SLOT = PKG.COMMAND_ARGUMENT + '.ArgumentItemSlot'
export const ARGUMENT_IDENTIFIER = PKG.COMMAND_ARGUMENT + '.ArgumentIdentifier'
export const ARGUMENT_MOB_EFFECT = PKG.COMMAND_ARGUMENT + '.ArgumentMobEffect'
export const ARGUMENT_FUNCTION = PKG.COMMAND_ARGUMENT + '.ArgumentFunction'
export const ARGUMENT_ENTITY_ANCHOR = PKG.COMMAND_ARGUMENT + '.ArgumentEntityAnchor'
export const ARGUMENT_ENCHANTMENT = PKG.COMMAND_ARGUMENT + '.ArgumentEnchantment'
export const ARGUMENT_ENTITY_SUMMON = PKG.COMMAND_ARGUMENT + '.ArgumentEntitySummon'
export const ADVANCEMENT = PKG.ADVANCEMENTS + '.Advancement'
export const QUERY_LISTENER = PKG.RCON + '.QueryListener'
export const RCON_LISTENER = PKG.RCON + '.RconListener'
export const RCON_CLIENT = PKG.RCON + '.RconClient'
export const RCON_THREAD = PKG.RCON + '.RconThread'
export const RCON_SERVER = PKG.RCON + '.Server'
export const ADVANCEMENT_ABSTRACT_CRITERION_INSTANCE = PKG.ADVANCEMENT_TRIGGERS + '.AbstractCriterionInstance'
export const ADVANCEMENT_TRIGGER = PKG.ADVANCEMENT_TRIGGERS + '.Trigger'
export const ADVANCEMENT_TRIGGER_BRED_ANIMALS = PKG.ADVANCEMENT_TRIGGERS + '.BredAnimals'
export const ADVANCEMENT_TRIGGER_BREWED_POTION = PKG.ADVANCEMENT_TRIGGERS + '.BrewedPotion'
export const ADVANCEMENT_TRIGGER_CHANGED_DIMENSION = PKG.ADVANCEMENT_TRIGGERS + '.ChangedDimension'
export const ADVANCEMENT_TRIGGER_CHANNELED_LIGHTNING = PKG.ADVANCEMENT_TRIGGERS + '.ChanneledLightning'
export const ADVANCEMENT_TRIGGER_CONSTRUCT_BEACON = PKG.ADVANCEMENT_TRIGGERS + '.ConstructedBeacon'
export const ADVANCEMENT_TRIGGER_CONSUME_ITEM = PKG.ADVANCEMENT_TRIGGERS + '.ConsumedItem'
export const ADVANCEMENT_TRIGGER_CURED_ZOMBIE_VILLAGER = PKG.ADVANCEMENT_TRIGGERS + '.CuredZombieVillager'
export const ADVANCEMENT_TRIGGER_DAMAGE = PKG.ADVANCEMENT_TRIGGERS + '.Damaged'
export const ADVANCEMENT_TRIGGER_DAMAGE_SOURCE = PKG.ADVANCEMENT_TRIGGERS + '.DamagedBy'
export const ADVANCEMENT_TRIGGER_EFFECTS_CHANGED = PKG.ADVANCEMENT_TRIGGERS + '.EffectsChanged'
export const ADVANCEMENT_TRIGGER_ENCHANTED_ITEM = PKG.ADVANCEMENT_TRIGGERS + '.EnchantedItem'
export const ADVANCEMENT_TRIGGER_ENTER_BLOCK = PKG.ADVANCEMENT_TRIGGERS + '.EnterBlock'
export const ADVANCEMENT_TRIGGER_ENTITY_HURT_PLAYER = PKG.ADVANCEMENT_TRIGGERS + '.EntityHurtPlayer'
export const ADVANCEMENT_TRIGGER_FILLED_BUCKET = PKG.ADVANCEMENT_TRIGGERS + '.FilledBucket'
export const ADVANCEMENT_TRIGGER_FISHING_ROD_HOOKED = PKG.ADVANCEMENT_TRIGGERS + '.FishingRodHooked'
export const ADVANCEMENT_TRIGGER_IMPOSSIBLE = PKG.ADVANCEMENT_TRIGGERS + '.Impossible'
export const ADVANCEMENT_TRIGGER_INVENTORY_CHANGED = PKG.ADVANCEMENT_TRIGGERS + '.InventoryChanged'
export const ADVANCEMENT_TRIGGER_ITEM_DURABILITY_CHANGED = PKG.ADVANCEMENT_TRIGGERS + '.ItemDurabilityChanged'
export const ADVANCEMENT_TRIGGER_KILL = PKG.ADVANCEMENT_TRIGGERS + '.Kill'
export const ADVANCEMENT_TRIGGER_LEVITATION = PKG.ADVANCEMENT_TRIGGERS + '.Levitation'
export const ADVANCEMENT_TRIGGER_NETHER_TRAVEL = PKG.ADVANCEMENT_TRIGGERS + '.NetherTravel'
export const ADVANCEMENT_TRIGGER_PLACED_BLOCK = PKG.ADVANCEMENT_TRIGGERS + '.PlacedBlock'
export const ADVANCEMENT_TRIGGER_PLAYER_HURT_ENTITY = PKG.ADVANCEMENT_TRIGGERS + '.PlayerHurtEntity'
export const ADVANCEMENT_TRIGGER_RECIPE_UNLOCKED = PKG.ADVANCEMENT_TRIGGERS + '.RecipeUnlocked'
export const ADVANCEMENT_TRIGGER_SUMMONED_ENTITY = PKG.ADVANCEMENT_TRIGGERS + '.SummonedEntity'
export const ADVANCEMENT_TRIGGER_TAME_ANIMAL = PKG.ADVANCEMENT_TRIGGERS + '.TameAnimal'
export const ADVANCEMENT_TRIGGER_TICK = PKG.ADVANCEMENT_TRIGGERS + '.Tick'
export const ADVANCEMENT_TRIGGER_USED_ENDER_EYE = PKG.ADVANCEMENT_TRIGGERS + '.UsedEnderEye'
export const ADVANCEMENT_TRIGGER_USED_TOTEM = PKG.ADVANCEMENT_TRIGGERS + '.UsedTotem'
export const ADVANCEMENT_TRIGGER_VILLAGER_TRADE = PKG.ADVANCEMENT_TRIGGERS + '.VillagerTrade'
export const BANNER_PATTERN = PKG.BLOCK_ENTITY + '.BannerPattern'
export const SOUND_CATEGORY = PKG.SOUND + '.SoundCategory'
export const RAIL_DIRECTION = PKG.BLOCK_STATE + '.RailDirection'
export const BLOCK_RAIL_BASE = PKG.BLOCK + '.RailBase'
export const BLOCK_RAIL_BASE$DIRECTION = BLOCK_RAIL_BASE + '$Direction'
export const BLOCK_FACE_SHAPE = PKG.BLOCK_STATE + '.FaceShape'
export const SPAWNER_LOGIC = PKG.BLOCK_ENTITY + '.SpawnerLogic'
export const FUNCTION_MANAGER = PKG.UTIL + '.FunctionManager'
export const CONTAINER = PKG.INVENTORY + '.Container'
export const CONTAINER_ENCHANTMENT = PKG.INVENTORY + '.ContainerEnchantment'
export const STRUCTURES = PKG.STRUCTURE + '.Structures'
export const STRUCTURE_WOODLAND_MANSION = PKG.STRUCTURE + '.WoodlandMansion'
export const PISTON_TYPE = PKG.BLOCK + '.PistonType'
export const SAND = PKG.BLOCK + '.Sand'
export const PISTON = PKG.BLOCK + '.Piston'
export const GRAVITY_BLOCK = PKG.BLOCK + '.GravityBlock'
export const HOPPER = PKG.BLOCK + '.Hopper'
export const CONTAINER_BLOCK = PKG.BLOCK + '.ContainerBlock'
export const BANNER = PKG.BLOCK + '.Banner'
export const STANDING_BANNER = PKG.BLOCK + '.StandingBanner'
export const HEAD = PKG.BLOCK + '.Head'
export const NORMAL_HEAD = PKG.BLOCK + '.NormalHead'
export const SIGN = PKG.BLOCK + '.Sign'
export const STANDING_SIGN = PKG.BLOCK + '.StandingSign'
export const BLOCK_ENTITY_PROVIDER = PKG.BLOCK_ENTITY + '.BlockEntityProvider'
export const GUI_SCREEN_OPTIMIZE_WORLD = PKG.MENU_WORLD + '.OptimizeWorld'
export const WORLD_OPTIMIZER = PKG.MENU_WORLD + '.Optimizer'
export const THREADED_ANVIL_CHUNK_STORAGE = PKG.WORLD_STORAGE + '.ThreadedAnvilChunkStorage'
export const PATH_HEAP = PKG.PATHFINDING + '.PathHeap'
export const PATH_POINT = PKG.PATHFINDING + '.PathPoint'
export const SCREENSHOT_HELPER = PKG.UTIL + '.ScreenshotHelper'
export const GUI_CHAT_OPTIONS = PKG.MENU + '.ChatOptions'
export const GUI_EDIT_WORLD = PKG.MENU_WORLD + '.EditWorld'
export const GUI_CUSTOMIZE_WORLD = PKG.MENU_WORLD + '.CustomizeWorld'
export const GUI_CUSTOMIZE_FLAT = PKG.MENU_WORLD + '.CustomizeWorldFlat'
export const GUI_OPTIONS = PKG.MENU_OPTIONS + '.Options'
export const GUI_OPTIONS_SNOOPER = PKG.MENU_OPTIONS + '.SnooperOptions'
export const GUI_OPTIONS_RESOURCE_PACKS = PKG.MENU_OPTIONS + '.ResourcePackOptions'
export const GUI_OPTIONS_TEXTURE_PACKS = PKG.MENU_OPTIONS + '.TexturePackOptions'
export const GUI_OPTIONS_SOUNDS = PKG.MENU_OPTIONS + '.SoundOptions'
export const GUI_OPTIONS_SKIN = PKG.MENU_OPTIONS + '.SkinCustomisation'
export const GUI_OPTIONS_CONTROLS = PKG.MENU_OPTIONS + '.ControlOptions'
export const GUI_OPTIONS_LANGUAGE = PKG.MENU_OPTIONS + '.LanguageOptions'
export const GUI_OPTIONS_VIDEO = PKG.MENU_OPTIONS + '.VideoOptions'
export const BLOCK_PROPERTY = PKG.BLOCK_STATE + '.Property'
export const BLOCK_PROPERTY_BASE = PKG.BLOCK_STATE + '.PropertyBase'
export const BLOCK_PROPERTY_BOOL = PKG.BLOCK_STATE + '.PropertyBool'
export const FACING = PKG.UTIL + '.Facing'
export const PISTON_MOVE_HELPER = PKG.BLOCK + '.PistonMoveHelper'
export const VOXEL_SHAPE = PKG.BLOCK + '.VoxelShape'
export const DIRECTIONAL_BLOCK = PKG.BLOCK + '.DirectionalBlock'
export const BLOCK_ENTITY_PISTON_MOVED_BLOCK = PKG.BLOCK_ENTITY + '.MovingPistonBlockEntity'
export const GUI_MULTIPLAYER_CONNECTING = PKG.MENU_MULTIPLAYER + '.Connecting'
export const GUI_OPEN_TO_LAN = PKG.MENU_MULTIPLAYER + '.OpenToLan'
export const GUI_RECIPE_BOOK = PKG.MENU_INGAME + '.RecipeBook'
export const GUI_BREWING_STAND = PKG.GUI_CONTAINER + '.BrewingStand'
export const GUI_BOSS_BAR = PKG.GUI_WIDGETS + '.BossBar'
export const GUI_SUBTITLE = PKG.GUI_WIDGETS + '.Subtitle'
export const GUI_CHAT_LINK_CONFIRM = PKG.GUI_WIDGETS + '.ChatLinkConfirmation'
export const GUI_SUPERFLAT_PRESETS = PKG.MENU_WORLD + '.SuperflatPresets'
export const GUI_DOWNLOADING_TERRAIN = PKG.MENU_MULTIPLAYER + '.DownloadingTerrain'
export const GUI_END_SCROLL = PKG.MENU_INGAME + '.EndScroll'
export const GUI_INVENTORY = PKG.GUI_CONTAINER + '.Inventory'
export const GUI_CRAFTING_TABLE = PKG.GUI_CONTAINER + '.CraftingTable'
export const GUI_CREATIVE_INVENTORY = PKG.GUI_CONTAINER + '.CreativeInventory'
export const GUI_DISPENSER = PKG.GUI_CONTAINER + '.Dispenser'
export const GUI_ENCHANTING_TABLE = PKG.GUI_CONTAINER + '.EnchantingTable'
export const GUI_FURNACE = PKG.GUI_CONTAINER + '.Furnace'
export const SAVE_HANDLER = PKG.WORLD_STORAGE + '.SaveHandler'
export const WORLD_PROVIDER = PKG.WORLD + '.WorldProvider'
export const LIGHT_TYPE = PKG.WORLD + '.LightType'
export const NON_EMPTY_FLUID = PKG.FLUID + '.NonEmptyFluid'
export const EMPTY_FLUID = PKG.FLUID + '.EmptyFluid'
export const FLUID_WATER = PKG.FLUID + '.Water'
export const FLUID_LAVA = PKG.FLUID + '.Lava'
export const SERVER_HANDLER_LOGIN = PKG.NETWORK_LOGIN + '.ServerHandler'
export const PACKET_LOGIN_HELLO = PKG.NETWORK_LOGIN_CLIENT + '.HelloC2S'
export const PACKET_LOGIN_KEY = PKG.NETWORK_LOGIN_CLIENT + '.KeyC2S'
export const PACKET_ENTITY_PROPERTIES = PKG.NETWORK_PLAY_SERVER + '.EntityPropertiesS2C'
export const PACKET_CHUNK = PKG.NETWORK_PLAY_SERVER + '.ChunkS2C'
export const HEIGHTMAP = PKG.WORLD + '.Heightmap'
export const HEIGHTMAP$TYPE = HEIGHTMAP + '$Type'
export const HEIGHTMAP$WORLD_STATE = HEIGHTMAP + '$WorldState'
export const GHAST = PKG.ENTITY_MONSTER + '.Ghast'
export const FLYING = PKG.ENTITY + '.Flying'
export const THROWN_ENDER_PEARL = PKG.ENTITY_PROJECTILE + '.EnderPearl'
export const PLAYER_CHUNK_MAP = PKG.SERVER_MANAGEMENT + '.PlayerChunkMap'
export const PLAYER_CHUNK_MAP_ENTRY = PKG.SERVER_MANAGEMENT + '.PlayerChunkMapEntry'
export const PISTON_BEHAVIOR = PKG.BLOCK + '.PistonBehavior'
export const UTILS = PKG.UTIL + '.Utils'
export const UTILS$OS = UTILS + '.OS'
export const FONT_TYPE = PKG.FONT + '.FontType'
export const CHAT_TYPE = PKG.TEXT + '.ChatType'
export const HIT_RESULT = PKG.MATH + '.HitResult'
export const HIT_RESULT$TYPE = HIT_RESULT + '$Type'
export const RAY_TRACE_FLUID_MODE = PKG.MATH + '.RayTraceFluidMode'
export const FISH = PKG.ENTITY_WATER + '.Fish'
export const DAMAGE_SOURCE = PKG.WORLD + '.DamageSource'
export const SERVER_STATUS_RESPONSE = PKG.NETWORK + '.ServerStatusResponse'
export const SPAWN_CONDITIONS = PKG.WORLD + '.SpawnConditions'
export const SPAWN_CONDITIONS$PLACE = SPAWN_CONDITIONS + '$Place'
export const SPAWN_CONDITIONS$ENTRY = SPAWN_CONDITIONS + '$Entry'
export const PLAYER_PROFILE_CACHE = PKG.SERVER_MANAGEMENT + '.PlayerProfileCache'
export const SNOOPER = PKG.PROFILER + '.Snooper'
export const COMMAND_MANAGER = PKG.COMMAND + '.CommandManager'
export const COMMAND_SOURCE = PKG.COMMAND + '.CommandSource'
export const COMMAND_SAVE_ALL = PKG.COMMAND_IMPL + '.SaveAll'
export const COMMAND_SAVE_ON = PKG.COMMAND_IMPL + '.SaveOn'
export const COMMAND_SAVE_OFF = PKG.COMMAND_IMPL + '.SaveOff'
export const COMMAND_ADVANCEMENT = PKG.COMMAND_IMPL + '.AdvancementCommand'
export const COMMAND_ME = PKG.COMMAND_IMPL + '.MeCommand'
export const COMMAND_LIST = PKG.COMMAND_IMPL + '.ListCommand'
export const COMMAND_MSG = PKG.COMMAND_IMPL + '.MessageCommand'
export const COMMAND_SAY = PKG.COMMAND_IMPL + '.Say'
export const COMMAND_STOP = PKG.COMMAND_IMPL + '.Stop'
export const COMMAND_TELLRAW = PKG.COMMAND_IMPL + '.TellRaw'
export const COMMAND_DATA = PKG.COMMAND_IMPL + '.DataCommand'
export const TEXT_COMPONENT = PKG.TEXT + '.Component'
export const TEXT_TRANSLATABLE_COMPONENT = PKG.TEXT + '.TranslatebleComponent'
export const TEXT_BASE_COMPONENT = PKG.TEXT + '.BaseComponent'
export const TEXT_SCORE_COMPONENT = PKG.TEXT + '.ScoreComponent'
export const TEXT_SELECTOR_COMPONENT = PKG.TEXT + '.SelectorComponent'
export const TEXT_KEYBIND_COMPONENT = PKG.TEXT + '.KeybindComponent'
export const TEXT_STYLE = PKG.TEXT + '.Style'
export const TEXT_TEXT_COMPONENT = PKG.TEXT + '.TextComponent'
export const TEXT_CLICK_EVENT = PKG.TEXT + '.ClickEvent'
export const TEXT_HOVER_EVENT = PKG.TEXT + '.HoverEvent'
export const TEXT_COMPONENT_UTILS = PKG.TEXT + '.ComponentUtils'
export const ENCHANTMENT_TYPE = PKG.ENCHANTMENT + '.EnchantmentType'
export const CLICK_TYPE = PKG.INVENTORY + '.ClickType'
export const TICK_PRIORITY = PKG.WORLD + '.TickPriority'
export const AI_GOALS = PKG.ENTITY_AI + '.AIGoals'
export const AI_GOALS$ENTRY = AI_GOALS + '$Entry'
export const AI_GOAL = PKG.ENTITY_AI + '.AIGoal'
export const AI_MOVE_THROUGH_VILLAGE = PKG.ENTITY_AI + '.MoveThroughVillageGoal'
export const AI_DOOR_INTERACT = PKG.ENTITY_AI + '.DoorInteractGoal'
export const AI_FOLLOW_MOB = PKG.ENTITY_AI + '.FollowMobGoal'
export const AI_FOLLOW_OWNER = PKG.ENTITY_AI + '.FollowOwnerGoal'
export const AI_ARROW_ATTACK = PKG.ENTITY_AI + '.ArrowAttackGoal'
export const AI_RESTRICT_OPEN_DOOR = PKG.ENTITY_AI + '.RestrictOpenDoorGoal'
export const AI_TEMPT = PKG.ENTITY_AI + '.TemptGoal'
export const PATHFINDER_MOB = PKG.ENTITY + '.PathfinderMob'
export const ATTRIBUTE_MODIFIER = PKG.ENTITY + '.AttributeModifier'
export const GL_STATE_MANAGER = PKG.RENDER + '.GLStateManager'
export const GL_STATE_MANAGER$ALPHA_STATE = GL_STATE_MANAGER + '$AlphaState'
export const GL_STATE_MANAGER$BLEND_STATE = GL_STATE_MANAGER + '$BlendState'
export const GL_STATE_MANAGER$BOOLEAN_STATE = GL_STATE_MANAGER + '$BooleanState'
export const GL_STATE_MANAGER$CLEAR_STATE = GL_STATE_MANAGER + '$ClearState'
export const GL_STATE_MANAGER$COLOR_STATE = GL_STATE_MANAGER + '$ColorState'
export const GL_STATE_MANAGER$COLOR_LOGIC_STATE = GL_STATE_MANAGER + '$ColorLogicState'
export const GL_STATE_MANAGER$COLOR_MASK = GL_STATE_MANAGER + '$ColorMask'
export const GL_STATE_MANAGER$COLOR_MATERIAL_STATE = GL_STATE_MANAGER + '$ColorMaterialState'
export const GL_STATE_MANAGER$CULL_FACE = GL_STATE_MANAGER + '$CullFace'
export const GL_STATE_MANAGER$CULL_STATE = GL_STATE_MANAGER + '$CullState'
export const GL_STATE_MANAGER$DEPTH_STATE = GL_STATE_MANAGER + '$DepthState'
export const GL_STATE_MANAGER$DEST_FACTOR = GL_STATE_MANAGER + '$DestFactor'
export const GL_STATE_MANAGER$FOG_MODE = GL_STATE_MANAGER + '$FogMode'
export const GL_STATE_MANAGER$FOG_STATE = GL_STATE_MANAGER + '$FogState'
export const GL_STATE_MANAGER$LOGIC_OP = GL_STATE_MANAGER + '$LogicOp'
export const GL_STATE_MANAGER$POLYGON_OFFSET_STATE = GL_STATE_MANAGER + '$PolygonOffsetState'
export const GL_STATE_MANAGER$PROFILE = GL_STATE_MANAGER + '$Profile'
export const GL_STATE_MANAGER$SOURCE_FACTOR = GL_STATE_MANAGER + '$SourceFactor'
export const GL_STATE_MANAGER$STENCIL_FUNC = GL_STATE_MANAGER + '$StencilFunc'
export const GL_STATE_MANAGER$STENCIL_STATE = GL_STATE_MANAGER + '$StencilState'
export const GL_STATE_MANAGER$TEX_GEN = GL_STATE_MANAGER + '$TexGen'
export const GL_STATE_MANAGER$TEX_GEN_COORD = GL_STATE_MANAGER + '$TexGenCoord'
export const GL_STATE_MANAGER$TEX_GEN_STATE = GL_STATE_MANAGER + '$TexGenState'
export const GL_STATE_MANAGER$TEXTURE_STATE = GL_STATE_MANAGER + '$TextureState'
export const GL_STATE_MANAGER$VIEWPORT = GL_STATE_MANAGER + '$Viewport'
export const INT_ARRAY_ALLOCATOR = PKG.UTIL + '.IntArrayAllocator'
export const PARTICLE = PKG.PARTICLE + '.Particle'
export const PARTICLE_MANAGER = PKG.PARTICLE + '.ParticleManager'
export const PARTICLE_FACTORY = PKG.PARTICLE + '.ParticleFactory'
export const PARTICLE_TYPE = PKG.COMMON_PARTICLE + '.ParticleType'
export const GUI_EDIT_BOX = PKG.GUI_WIDGETS + '.EditBox'
export const WORLD_SUMMARY = PKG.WORLD + '.WorldSummary'
export const BUFFER_BUILDER = PKG.RENDER + '.BufferBuilder'
export const VERTEX_FORMAT = PKG.VERTEX + '.VertexFormat'
export const VERTEX_FORMAT_ELEMENT = PKG.VERTEX + '.VertexElement'
export const SERVER_ADDRESS = PKG.CLIENT_MULTIPLAYER + '.ServerAddress'
export const PRE_YGGSDRASIL_CONVERTER = PKG.SERVER_MANAGEMENT + '.PreYggsdrasilConverter'
export const BAN_LIST = PKG.SERVER_MANAGEMENT + '.BanList'
export const OP_LIST = PKG.SERVER_MANAGEMENT + '.OpList'
export const WHITE_LIST = PKG.SERVER_MANAGEMENT + '.WhiteList'
export const CARVER = PKG.WORLD_GEN_CARVING + '.Carver'
export const SURFACE_BUILDER = PKG.WORLD_GEN_SURFACE + '.SurfaceBuilder'
export const FEATURE = PKG.WORLD_GEN_FEATURE + '.Feature'
export const DECORATOR = PKG.WORLD_GEN_DECORATION + '.Decorator'
export const EQUIPMENT_SLOT = PKG.INVENTORY + '.EquipmentSlot'
export const HAND = PKG.PLAYER + '.Hand'
export const PLAYER_MODEL_PART = PKG.PLAYER + '.PlayerModelPart'
export const BLOCK_ENTITY_TYPE = PKG.BLOCK_ENTITY + '.BlockEntityType'
export const BIOME_SOURCE_TYPE = PKG.BIOME + '.BiomeSourceType'
export const CHUNK_GENERATOR_TYPE = PKG.WORLD_GEN + '.ChunkGeneratorType'
export const MOTIVE = PKG.WORLD + '.Motive'
export const TAG = PKG.DATA + '.Tag'
export const TAG_LIST = PKG.DATA + '.TagList'
export const BLOCK_TAGS = PKG.DATA_PACK_VANILLA + '.BlockTags'
export const ITEM_TAGS = PKG.DATA_PACK_VANILLA + '.ItemTags'
export const WORLD_SETTINGS = PKG.WORLD + '.WorldSettings'
