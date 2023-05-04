'use client';
import { ListDID as ListDIDStory } from "@/component-library/components/Pages/ListDID/ListDID";
import { DIDDTO, DIDMeta, RSEAccountUsageLimitDTO } from "@/lib/core/data/rucio-dto";
import {
    CreateRuleQuery, DIDSearchQuery, DIDSearchResponse, DIDName,
    TypedDIDValidationQuery, TypedDIDValidationResponse,
    RSESearchQuery
} from '@/lib/infrastructure/data/view-model/createRule'
import useComDOM from "@/lib/infrastructure/hooks/useComDOM";


export default function ListDID() {
    const didSearch = (didSearchQuery: DIDSearchQuery) => { }
    const didResponse = {
        data: [
            { "scope": "user.LindaMiller", "name": "dataset-ojTcChlQGtvpWBAnUcNn", "did_type": "CONTAINER", "bytes": 57855156, "length": 35878152 },
            { "scope": "user.TravisRoberts", "name": "file-DfIbGGDiGWyJhrvRYwtw", "did_type": "CONTAINER", "bytes": 42245800, "length": 45289199 },
            { "scope": "user.DonnaBennett", "name": "dataset-RiwBaeaxTMYxOHEzAgdG", "did_type": "CONTAINER", "bytes": 51337255, "length": 87665604 },
            { "scope": "user.DonnaFrazier", "name": "container-gkcouVjJHfbirKsFeruw", "did_type": "FILE", "bytes": 10559288, "length": 94198083 },
            { "scope": "user.NatashaBaker", "name": "dataset-BFesxCNVirxzoXAZZfIo", "did_type": "FILE", "bytes": 53858564, "length": 53898582 },
            { "scope": "user.StephenAcevedo", "name": "container-IICfIDTefkLoBAkIhwGM", "did_type": "CONTAINER", "bytes": 38546563, "length": 61508975 },
            { "scope": "user.SamuelTorres", "name": "file-XWtNWNOuvDDXcqUfSUgy", "did_type": "FILE", "bytes": 11171051, "length": 62211756 },
            { "scope": "user.CameronRoach", "name": "file-NkXyXoXCESSrvdoAGpVu", "did_type": "CONTAINER", "bytes": 22688209, "length": 80266693 },
            { "scope": "user.RebeccaArmstrong", "name": "dataset-IOWxHRXOyhroyIxcEuJM", "did_type": "CONTAINER", "bytes": 37136050, "length": 3817641 },
            { "scope": "user.MaryPerez", "name": "container-NcROIUCelYSGGBQFcWEn", "did_type": "DATASET", "bytes": 19681544, "length": 74894628 },
            { "scope": "user.StephenSantiago", "name": "dataset-cGareaACtfkZgIPiVHtD", "did_type": "DATASET", "bytes": 46080881, "length": 18156444 },
            { "scope": "user.JosephBarber", "name": "container-InPkJtcYzarZZOToNIBp", "did_type": "DATASET", "bytes": 89316543, "length": 1436568 },
            { "scope": "user.NicholeSpencer", "name": "container-pDlehoLiHnOfOShLYGCk", "did_type": "FILE", "bytes": 2279436, "length": 59242759 },
            { "scope": "user.JenniferWilliams", "name": "dataset-UlRPgqcZoetuhhqosdnv", "did_type": "FILE", "bytes": 12710764, "length": 50997328 },
            { "scope": "user.ErikWhite", "name": "file-aPhJsIkHhoVjIfvwvyhu", "did_type": "DATASET", "bytes": 44475795, "length": 33909719 },
            { "scope": "user.AdrianaIngram", "name": "container-FoeIHkwAkJRiAmJsbEAg", "did_type": "FILE", "bytes": 31813355, "length": 94280667 },
            { "scope": "user.AlyssaWalker", "name": "file-SlnlRQlMRUTlUifTUaOL", "did_type": "FILE", "bytes": 46223761, "length": 25869593 },
            { "scope": "user.LisaHarding", "name": "dataset-ULljzQZBcOfzRsPRinoX", "did_type": "FILE", "bytes": 84213843, "length": 77794722 },
            { "scope": "user.PatrickDavis", "name": "file-FZbuYaMIKwYwiVGspthg", "did_type": "FILE", "bytes": 70068921, "length": 86915006 },
            { "scope": "user.JohnSchultz", "name": "file-UHeMjtndsqopgUTvPpsR", "did_type": "FILE", "bytes": 41772736, "length": 77412832 },
            { "scope": "user.AmandaDavidson", "name": "dataset-txcFmMeZYIZGXWDstRfS", "did_type": "CONTAINER", "bytes": 52649236, "length": 27770525 },
            { "scope": "user.MarkWilliams", "name": "dataset-mDFJqdJITFiEQlSIxDMk", "did_type": "FILE", "bytes": 97013788, "length": 99750666 },
            { "scope": "user.JulieDurham", "name": "file-OnUWbtuHaeYbhiLtPQHn", "did_type": "CONTAINER", "bytes": 68126875, "length": 22601722 },
            { "scope": "user.RandyWagner", "name": "file-bFiuoFcPIRokHnOnoDYP", "did_type": "CONTAINER", "bytes": 65528892, "length": 60612016 },
            { "scope": "user.CarlosVargas", "name": "dataset-uynnuIhZmHUkmjITweEX", "did_type": "DATASET", "bytes": 99602462, "length": 76910640 },
            { "scope": "user.NatashaSanders", "name": "dataset-vKQDHtVUgjizsolxePDz", "did_type": "DATASET", "bytes": 40464249, "length": 17615672 },
            { "scope": "user.RobertNorris", "name": "container-twhuzgONBHeZUZLWhbKT", "did_type": "FILE", "bytes": 4469665, "length": 53010728 },
            { "scope": "user.MaryWheeler", "name": "file-FbySgmfANpXmHyTBHNIu", "did_type": "DATASET", "bytes": 83086038, "length": 53081834 },
            { "scope": "user.MelissaMorrow", "name": "container-gxmwvJJCyRRVhnOfSkCp", "did_type": "CONTAINER", "bytes": 61290544, "length": 19038879 },
            { "scope": "user.JasonDunn", "name": "container-nHWirrOzXwKDlzVINbYH", "did_type": "CONTAINER", "bytes": 9895949, "length": 98187884 },
            { "scope": "user.HannahGarcia", "name": "file-JVdToMPUUqMPCyuYNbfy", "did_type": "FILE", "bytes": 10328011, "length": 26532052 },
            { "scope": "user.ElizabethRussell", "name": "file-XyJesTHtishyGsTsWxTi", "did_type": "CONTAINER", "bytes": 95063812, "length": 49606221 },
            { "scope": "user.JosephTorres", "name": "container-WUhVvxgbrBbXlbneYaEq", "did_type": "FILE", "bytes": 46992819, "length": 49713319 },
            { "scope": "user.ToddStevenson", "name": "dataset-ElozCljGdvlJoHAgHRhY", "did_type": "DATASET", "bytes": 44199675, "length": 80958228 },
            { "scope": "user.CynthiaArmstrong", "name": "dataset-IZeapZKxwshFXFJORFtt", "did_type": "FILE", "bytes": 5647667, "length": 19286430 },
            { "scope": "user.TaylorBranch", "name": "dataset-KTHNJYcNdLcOcvVRKZfi", "did_type": "FILE", "bytes": 68328297, "length": 74827308 },
            { "scope": "user.EdwardBaker", "name": "container-jflcnJDqDQCSoQSlVuZj", "did_type": "FILE", "bytes": 888723, "length": 52392276 },
            { "scope": "user.JulieMoore", "name": "container-qlvWVFOtubGlKAlTETUg", "did_type": "CONTAINER", "bytes": 63031345, "length": 23748186 },
            { "scope": "user.AaronTaylor", "name": "container-NOCeTWjFeCtUuJBEqsAS", "did_type": "CONTAINER", "bytes": 59417035, "length": 34288294 },
            { "scope": "user.JessicaRodriguez", "name": "file-oSnbLKdBkmTorfEXvPxL", "did_type": "DATASET", "bytes": 84069178, "length": 97621688 },
            { "scope": "user.RobertHill", "name": "container-wiEDpVIikPhELhDpsONF", "did_type": "DATASET", "bytes": 13793393, "length": 34531780 },
            { "scope": "user.KimberlyWilliams", "name": "container-bEXTrrnCRJTeESVcQpgf", "did_type": "CONTAINER", "bytes": 18747993, "length": 19931404 },
            { "scope": "user.JosephParks", "name": "dataset-xOESZMsnKCrMmxmFXwVT", "did_type": "DATASET", "bytes": 45131854, "length": 99842146 },
            { "scope": "user.KyleSmith", "name": "file-fVjfJEaCMNynLdfZamDO", "did_type": "DATASET", "bytes": 2733735, "length": 38980708 },
            { "scope": "user.DeborahWise", "name": "file-TQPwCdIghWjrcPgzNCFG", "did_type": "CONTAINER", "bytes": 32845359, "length": 26863888 },
            { "scope": "user.AnthonyWilliamson", "name": "dataset-gqgbKOrtgVyLqdkzqUjG", "did_type": "CONTAINER", "bytes": 37622688, "length": 55452326 },
            { "scope": "user.VincentThompson", "name": "dataset-dTkCzoCgcIvVeLJSBbwN", "did_type": "CONTAINER", "bytes": 72835740, "length": 20274714 },
            { "scope": "user.KatherineJones", "name": "file-zUWSTRnDCiadyCHDbvqh", "did_type": "FILE", "bytes": 24276634, "length": 12602254 },
            { "scope": "user.DebraParrish", "name": "file-HVhaNDoRZpEqLlDiXzqA", "did_type": "CONTAINER", "bytes": 53347989, "length": 57460198 },
            { "scope": "user.LuisThomas", "name": "file-jVfHbCTHWdsznaebrPPt", "did_type": "FILE", "bytes": 90577247, "length": 54065728 },
            { "scope": "user.GaryMendoza", "name": "dataset-uhYpkYkzksTGDJsRStAD", "did_type": "CONTAINER", "bytes": 80576081, "length": 39650916 },
            { "scope": "user.SarahPhillips", "name": "file-QomfzfPTXflCAWjFZcAA", "did_type": "FILE", "bytes": 64314454, "length": 87170020 },
            { "scope": "user.KelliBrooks", "name": "dataset-UnBQRUgUOqlbmWRZSosB", "did_type": "DATASET", "bytes": 13876227, "length": 10248226 },
            { "scope": "user.JulieAvila", "name": "dataset-HfKEKuhBgfcOalBUwXtW", "did_type": "CONTAINER", "bytes": 62451433, "length": 86753112 },
            { "scope": "user.ThomasHines", "name": "dataset-afLGLuagHvVlNsoBqkgK", "did_type": "FILE", "bytes": 62236103, "length": 39315991 },
            { "scope": "user.DanielLawrence", "name": "file-iQMUMSCVZhZIDVpRHitt", "did_type": "FILE", "bytes": 9908995, "length": 15907639 },
            { "scope": "user.MariaCampbell", "name": "file-LvdnfhXesmraRdqInGJk", "did_type": "DATASET", "bytes": 18577062, "length": 18745775 },
            { "scope": "user.MichaelCunningham", "name": "file-QPYoPxdRkwXiCfZANecb", "did_type": "CONTAINER", "bytes": 31204834, "length": 60109803 },
            { "scope": "user.RobinBenson", "name": "container-YOkoMlmpzhjWVpnXASIl", "did_type": "FILE", "bytes": 3248463, "length": 71140375 },
            { "scope": "user.PedroValencia", "name": "container-jAsgMhkmqONzIjingfLo", "did_type": "CONTAINER", "bytes": 815855, "length": 78094664 },
            { "scope": "user.CalebMurray", "name": "file-QIYcmdFwTpIAHNOIZcZG", "did_type": "DATASET", "bytes": 63800937, "length": 98126170 },
            { "scope": "user.AngelicaCampbell", "name": "container-OhgJsuQTnWhvtUuzJnct", "did_type": "FILE", "bytes": 91122585, "length": 92629714 },
            { "scope": "user.JohnLevy", "name": "container-GvXMZSxnBJHakNJSQnSc", "did_type": "FILE", "bytes": 46937736, "length": 26542341 },
            { "scope": "user.AmandaCooper", "name": "container-FRlMaAnEJBsdUPVUryRW", "did_type": "CONTAINER", "bytes": 86291151, "length": 70167279 },
            { "scope": "user.JoshuaWilson", "name": "file-kCRynujuEtsizDHkmYVw", "did_type": "CONTAINER", "bytes": 73371270, "length": 68313743 },
            { "scope": "user.RachelWilson", "name": "container-PgOmyEhHqgaLVAlEjejx", "did_type": "CONTAINER", "bytes": 87024192, "length": 33038824 },
            { "scope": "user.CraigMaxwell", "name": "file-XJBduOtUTGbWMKiRJsXI", "did_type": "DATASET", "bytes": 89147224, "length": 35148172 },
            { "scope": "user.ChristinaHudson", "name": "file-odMisjZClYBRphgFCyWo", "did_type": "FILE", "bytes": 64434402, "length": 81885298 },
            { "scope": "user.JohnJohnson", "name": "container-ZLkJOZLViSxFsesKrGjv", "did_type": "DATASET", "bytes": 8153225, "length": 44483944 },
            { "scope": "user.ReginaWarren", "name": "dataset-dLdxYHfSdPatoHuUYXcC", "did_type": "CONTAINER", "bytes": 3766392, "length": 67425968 },
            { "scope": "user.VanessaShaw", "name": "dataset-tTABkYUjJrBxTsNdjjfg", "did_type": "FILE", "bytes": 33355014, "length": 38575090 },
            { "scope": "user.RickyWilliams", "name": "container-CFDJGJGzFVZgZFcaaosb", "did_type": "FILE", "bytes": 60232788, "length": 86145218 },
            { "scope": "user.RichardAnderson", "name": "container-GjhBxWgzeBrqHFRlPptz", "did_type": "CONTAINER", "bytes": 3647607, "length": 37935266 },
            { "scope": "user.OscarDavis", "name": "container-dulgIjxWxEAVFhtstMYt", "did_type": "DATASET", "bytes": 76879625, "length": 92371705 },
            { "scope": "user.DebraShaffer", "name": "container-szCSRFSjqmVdNrFMcYan", "did_type": "CONTAINER", "bytes": 8991574, "length": 49532619 },
            { "scope": "user.JustinProctor", "name": "dataset-mbFyPvWqDFGCWVsoFMfy", "did_type": "DATASET", "bytes": 2690944, "length": 75752670 },
            { "scope": "user.JamesWebster", "name": "file-vGvlCDrMnbafdizDKWhO", "did_type": "CONTAINER", "bytes": 88134454, "length": 41221516 },
            { "scope": "user.AmberFerguson", "name": "file-cAyKHhGYrhCPARYYCyVp", "did_type": "DATASET", "bytes": 68519062, "length": 58054445 },
            { "scope": "user.DavidJones", "name": "file-YrxpYvCQutLTmyPOAYwS", "did_type": "FILE", "bytes": 7707125, "length": 56495933 },
            { "scope": "user.DanielleCollins", "name": "dataset-OkFRStgHdcnkIivroKiq", "did_type": "DATASET", "bytes": 81875762, "length": 7519465 },
            { "scope": "user.LaurenBarnes", "name": "file-NmSLnrfuFiiVqdeaxgft", "did_type": "CONTAINER", "bytes": 44378439, "length": 54017779 },
            { "scope": "user.TimWatson", "name": "container-dnXOoNcEGNyGhoFSEerv", "did_type": "CONTAINER", "bytes": 11934348, "length": 84689596 },
            { "scope": "user.CoreyHernandez", "name": "dataset-ycHnFcIODcgTRyebUpVv", "did_type": "FILE", "bytes": 56250255, "length": 70638889 },
            { "scope": "user.CandiceMiller", "name": "file-lDZPKYcBTWMDQARaciSM", "did_type": "FILE", "bytes": 45195676, "length": 85077245 },
            { "scope": "user.MarisaGarza", "name": "container-ZMDkfRuzfTnaaYhmpmiA", "did_type": "FILE", "bytes": 43102853, "length": 51552678 },
            { "scope": "user.MikeThornton", "name": "dataset-gxcUZdxRPKVvuXTVhgEo", "did_type": "FILE", "bytes": 79385648, "length": 29275462 },
            { "scope": "user.KellyBarton", "name": "dataset-TNXeVcsZxAIgoFzlWzBD", "did_type": "FILE", "bytes": 54686271, "length": 80479209 },
            { "scope": "user.DianeDavis", "name": "file-UyhqLwUFgHNOrfimmUSz", "did_type": "CONTAINER", "bytes": 13841447, "length": 89940485 },
            { "scope": "user.SherryRichard", "name": "dataset-yvmpsOGBVsfoyNukUYsM", "did_type": "FILE", "bytes": 8066016, "length": 26393429 },
            { "scope": "user.JerryMorris", "name": "dataset-PZkPdJHHOueSexGYYtDt", "did_type": "DATASET", "bytes": 49902824, "length": 55325021 },
            { "scope": "user.MarciaHall", "name": "container-JBajjXFkOsWbiqUAsQZq", "did_type": "FILE", "bytes": 19138524, "length": 22877025 },
            { "scope": "user.LisaOrtega", "name": "dataset-kszNPrTIaonVjBJEnpVs", "did_type": "FILE", "bytes": 13742278, "length": 49760615 },
            { "scope": "user.TraciTaylor", "name": "container-OlMTbKDmsCbEXxeBXlDE", "did_type": "FILE", "bytes": 79042684, "length": 50137278 },
            { "scope": "user.LaurenRubio", "name": "container-XXjFeQxZMclEXCpoxzPz", "did_type": "CONTAINER", "bytes": 24695058, "length": 26790126 },
            { "scope": "user.TinaKnight", "name": "container-VOmpqveuDMobgZUVRKVK", "did_type": "CONTAINER", "bytes": 31879330, "length": 63386632 },
            { "scope": "user.MariaFitzpatrick", "name": "file-ngFvIoMWADtJJzrJbetc", "did_type": "FILE", "bytes": 69586918, "length": 64642814 },
            { "scope": "user.RichardLee", "name": "file-kvQSCAWGTZrNNRTJYEBn", "did_type": "FILE", "bytes": 7123971, "length": 31694650 },
            { "scope": "user.DanielDuke", "name": "container-cTRBJPcurzSZZVPBWaSK", "did_type": "FILE", "bytes": 26393337, "length": 18267112 },
            { "scope": "user.AlexanderCochran", "name": "file-WflQiYrfhtBKXPZCmhhc", "did_type": "CONTAINER", "bytes": 1757187, "length": 22419832 },
            { "scope": "user.GeraldReynolds", "name": "dataset-yqVBQZNChwUpaRFEZrWh", "did_type": "FILE", "bytes": 65234019, "length": 85506252 },
        ],
        fetchStatus: "idle",
    } as DIDSearchResponse
    const didMetaQuery = (did: DIDName) => { }
    const didMetaQueryResponse = {
        "name": "dataset-YSytZjXJMdiCsSiiUwXx",
        "scope": "Lawrence.Myers",
        "account": "Lawrence_Myers",
        "did_type": "Dataset",
        "created_at": new Date(2021, 3),
        "updated_at": new Date(2022, 10),
        "availability": "Deleted",
        "obsolete": false,
        "hidden": true,
        "suppressed": true,
        "purge_replicas": true,
        "monotonic": true,
        "is_open": true,
        "adler32": null,
        "guid": null,
        "md5": null,
        "filesize": null
    } as DIDMeta


    return (
        <ListDIDStory
            didSearch = {didSearch}
            didResponse = {didResponse}
            didMetaQuery = {didMetaQuery}
            didMetaQueryResponse = {didMetaQueryResponse}
        />
    )
}