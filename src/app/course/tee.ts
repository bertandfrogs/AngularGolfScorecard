export interface Tee {
    data: {
        holes: [
            {
            teeBoxes: [
                {
                hole: number;
                teeType: string;
                hcp: number;
                par: number;
                yards: number;
                }
            ]
            }
        ]
    };

}