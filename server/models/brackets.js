const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TweetSchema object
const BracketSchema = new Schema({
    creator: {
        type: String,
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    size: {
        type: Number,
        trim: true,
        required: true
    },
    date: {
        type: String
    },
    round: {
        type: Number,
        trim: true,
        required: true
    },
    brackets: {
        col1: {
            row1: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            },
            row2: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            },
            row3: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            },
            row4: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            },
            row5: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            },
            row6: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            },
            row7: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            },
            row8: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            }
        },
        col2: {
            row1: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            },
            row2: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            },
            row3: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            },
            row4: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            },
            row5: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            },
            row6: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            },
            row7: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            },
            row8: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            }
        },
        col3: {
            row1: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            },
            row2: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            }
        },
        col4: {
            row1: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
                b: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                }
            }
        },
        col5: {
            row1: {
                a: {
                    name: {
                        type: String,
                        trim: true
                    },
                    seed: {
                        type: Number,
                        trim: true
                    }
                },
            }
        }
    }

});

// This creates our model from the above schema, using Mongoose's model method
var Bracket = mongoose.model('Bracket', BracketSchema);

module.exports = Bracket;
