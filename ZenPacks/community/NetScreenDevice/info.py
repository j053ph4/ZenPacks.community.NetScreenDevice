from ZenPacks.community.ConstructionKit.ClassHelper import *

def NetScreenTunnelgetEventClassesVocabulary(context):
    return SimpleVocabulary.fromValues(context.listgetEventClasses())

class NetScreenTunnelInfo(ClassHelper.NetScreenTunnelInfo):
    ''''''


